import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getData } from "@/utils/queryEmbeddings";
import { auth } from "@/auth";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chat = model.startChat({
  history: [],
});

export async function POST(request: NextRequest) {
  const response = await request.json();
  const session = await auth();

  const namespace = session?.user?.email as string;

  const { message } = response;

  const answer = await getData(message, namespace);

  const prompt = `Can you answer the question ${message} based on the following ${answer}`;

  const result = await chat.sendMessage(prompt);

  return NextResponse.json({ result: result.response.text() });
}
