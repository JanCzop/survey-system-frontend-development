import { z } from "zod";

export const questionOptionSchema = z.object({
  order: z.number(),
  text: z.string(),
});

export const questionSchema = z
  .object({
    type: z.number(),
    order: z.number(),
    text: z.string(),
    label: z.string().nullish(),
    details: z.string().nullish(),
    required: z.boolean().nullish(),
    choices: z.array(questionOptionSchema).nullish(),
  })
  .refine(
    (data) =>
      data.type > 2 ||
      ((data?.type === 1 || data?.type === 2) && data?.choices),
    {
      message: "Choices are required for single and multi choice questions",
    },
  );

export const surveySchema = z.object({
  id: z.string(),
  name: z.string(),
  questions: questionSchema.array(),
});

export const newSurveySchema = z.object({
  name: z.string(),
  start_date: z.string(),
  end_date: z.string(),
  questions: questionSchema.array(),
});

export const formDataSchema = z.object({
  questions: z.array(questionSchema),
});
