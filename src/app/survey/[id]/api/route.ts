import { collectFormData } from "./helpers";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const data = await collectFormData(request);
    const res = await fetch(
      `${BACKEND_URL}/api/survey/${params.id}/submit-answers/`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }

    console.log(res.body);
    return new Response(res.body, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response(String(error), { status: 500 });
  }
}
