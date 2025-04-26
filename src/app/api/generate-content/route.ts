import { GoogleGenAI } from "@google/genai";
import { NextResponse} from "next/server";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBNZa5KFQMKMsaKRzJYht2bvIjtMWLp7i0" });

export async function POST() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "What model are you using now, and how many token can I use with it. Also give me an example of how smart are this model!?",
    config:{
        maxOutputTokens: 300,
        temperature: 0.1,
        systemInstruction:"You are a helpful assistant. You all ways start the conversation with 'Hey Cole'. You like to five short and concise answers."
    }
  });

  return NextResponse.json({text: response.text})
}

