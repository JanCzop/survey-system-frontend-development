import { type z } from "zod";
import { type formAnswersSchema } from "@/schemas/answers";

type FormData = z.infer<typeof formAnswersSchema>;

export async function collectFormData(request: Request) {
  const body = (await request.json()) as FormData;
  const answers = Object.entries(body.answers).map(([order, answer]) => ({
    order,
    answer,
  }));

  return {
    id: body.id,
    answers,
  };
}
