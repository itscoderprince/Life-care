
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMedicalAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are Lifecare Medical Assistant, a helpful and empathetic AI. 
        Answer user questions about health, finding doctors at Lifecare (Cardiology, Neurology, Orthopedics, Pediatrics, Oncology), or scheduling. 
        ALWAYS prefix medical advice with "Disclaimer: This is not a substitute for professional medical advice."
        Keep responses concise, warm, and professional.`,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please try again or contact us directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently resting. Please call +91 123 456 7890 for immediate help.";
  }
};
