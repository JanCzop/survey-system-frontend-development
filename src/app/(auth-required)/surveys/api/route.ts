import { collectFormData } from "./helpers";
import { newSurveySchema } from "@/schemas/survey";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

export async function GET(request: Request) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/survey/get-all/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization") ?? "",
      },
    });

    const data = (await res.json()) as RowsApiResponse;
    console.log(data);

    const rows = data.map((row) => ({
      id: row.id,
      title: row.name,
      startDate: row.start_date,
      endDate: row.end_date,
      link: `${FRONTEND_URL}/survey/${row.id}`,
      analysisLink: `/survey/${row.id}/analysis`,
      status: row.status,
    }));

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(String(error), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  try {
    const newSurvey = await collectFormData(request);
    newSurveySchema.parse(newSurvey);

    console.dir(newSurvey, { depth: Infinity });

    const res = await fetch(`${BACKEND_URL}/api/survey/create/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
      body: JSON.stringify(newSurvey),
    });

    if (!res.ok) {
      throw new Error(await res.text());
    }

    return new Response(res.body, { status: 200 });
  } catch (error: unknown) {
    console.error(error);
    return new Response(String(error), { status: 500 });
  }
}
