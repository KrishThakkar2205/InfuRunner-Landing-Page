import { GoogleGenAI } from "@google/genai";

// safely access environment variables whether in Vite (import.meta.env) or standard process.env
const getApiKey = () => {
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_KEY) {
    // @ts-ignore
    return import.meta.env.VITE_API_KEY;
  }
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    return process.env.API_KEY;
  }
  return '';
};

const apiKey = getApiKey();

// Initialize only if key exists
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateCampaignIdeas = async (businessType: string): Promise<string> => {
  if (!ai) {
    return "Please configure your API Key to use the AI Campaign Generator.";
  }

  try {
    const model = ai.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a creative marketing strategist for InfluRunner. 
      Generate 2 short, catchy, and innovative influencer campaign ideas for a "${businessType}". 
      Focus on transparency and connecting with local audiences. 
      Keep the tone exciting and professional. Format with clear bullet points.`,
    });

    return response.text || "No ideas generated. Try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to generate ideas at the moment. Please try again later.";
  }
};