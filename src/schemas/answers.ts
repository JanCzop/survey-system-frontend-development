import { z } from "zod";

export const formAnswersSchema = z.object({
  id: z.number(),
  answers: z.record(z.string().or(z.array(z.string()))),
});

export const answerSchema = z.object({
  order: z.number(),
  answer: z.union([z.string(), z.number(), z.boolean(), z.array(z.number())]),
});

export const finalAnswersSchema = z.object({
  id: z.number(),
  answers: z.array(answerSchema),
});
