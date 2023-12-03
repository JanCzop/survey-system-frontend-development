const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateUser;
    const res = await fetch(`${BACKEND_URL}/api/account/create/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
