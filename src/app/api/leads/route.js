export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, loanType, amount, city } = body;

    if (!name || !phone) {
      return Response.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const createdAt = new Date().toISOString();
    const response = await fetch(
      "https://sheetdb.io/api/v1/vwkasd7qhnfqz",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            { createdAt, name, phone, loanType, amount, city }
          ],
        }),
      }
    );

    const data = await response.json();

    return Response.json({ success: true, data });

  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}