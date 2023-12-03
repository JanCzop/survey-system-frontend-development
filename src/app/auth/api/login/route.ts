const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginUser;
    const res = await fetch(`${BACKEND_URL}/api/account/token/`, {
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

    const { access } = (await res.json()) as { access: string };

    const headers = new Headers();
    headers.set("Set-Cookie", `token=${access}; `);
    headers.set("Set-Cookie", `email=${body.email}; `);
    headers.set("Set-Cookie", `username=${body.username || body.email}; `);

    return new Response(new Blob(), { status: 200, headers });
  } catch (error: unknown) {
    console.error(error);
    return new Response(String(error), { status: 500 });
  }
}
