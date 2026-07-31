import { GoogleGenAI } from "@google/genai";

export const enhancePrompt = async (originalPrompt) => {
  const safePrompt = (originalPrompt || "").trim();

  if (!safePrompt) return safePrompt;

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("[Gemini] API key not found. Using original prompt.");
    return safePrompt;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `Rewrite this image prompt into a highly detailed prompt while preserving the original meaning.

Prompt: ${safePrompt}`,
    });

    const enhanced = response.text?.trim();

    if (!enhanced) {
      return safePrompt;
    }

    console.log("[Gemini] Prompt enhanced.");

    return enhanced;
  } catch (err) {
    console.error("[Gemini]", err.message);
    return safePrompt;
  }
};