import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, direction, message } = body;

    // Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Ism kamida 2 ta belgidan iborat bo‘lishi kerak" },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json(
        { error: "Telefon raqami noto‘g‘ri kiritildi" },
        { status: 400 }
      );
    }

    // Sanitize values
    const sanitizedData = {
      fullName: fullName.trim().slice(0, 100),
      phone: phone.trim().slice(0, 30),
      direction: typeof direction === "string" ? direction.trim().slice(0, 50) : "boshqa",
      message: typeof message === "string" ? message.trim().slice(0, 1000) : "",
      createdAt: new Date().toISOString(),
    };

    console.log("[INQUIRY_RECEIVED]", sanitizedData);

    return NextResponse.json({
      success: true,
      message: "Murojaatingiz muvaffaqiyatli qabul qilindi",
      data: {
        id: `inq_${Date.now()}`,
        ...sanitizedData,
      },
    });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { error: "Serverda xatolik yuz berdi" },
      { status: 500 }
    );
  }
}
