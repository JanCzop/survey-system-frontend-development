import { type z } from "zod";
import { type formDataSchema, type newSurveySchema } from "@/schemas/survey";

type NewSurvey = z.infer<typeof newSurveySchema>;
type FormData = z.infer<typeof formDataSchema>;

export async function collectFormData(request: Request): Promise<NewSurvey> {
  try {
    const body = (await request.json()) as FormData;
    const questions = body.questions
      .filter((question) => !!question)
      .map((question) => {
        const choices = question.choices?.filter((choice) => !!choice);
        return {
          ...question,
          choices,
        };
      });

    const newSurvey: NewSurvey = {
      ...body,
      name: "New Survey",
      start_date: "2023-01-01",
      end_date: "2025-01-01",
      questions,
    };

    return newSurvey;
  } catch (error: unknown) {
    console.error(error);
    throw new Error(String(error));
  }
}
