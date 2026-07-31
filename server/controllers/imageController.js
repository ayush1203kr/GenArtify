import axios from "axios";
import userModel from "../models/userModel.js";
import { enhancePrompt } from "../services/geminiService.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.creditBalance <= 0) {
      return res.status(403).json({
        success: false,
        message: "Insufficient credits",
        creditBalance: user.creditBalance,
      });
    }

    // Step 1: Enhance the user's prompt using Gemini
    // If Gemini fails, the original prompt is returned automatically.
    console.log(`[ImageGen] User ${userId} requested prompt: "${prompt}"`);
    const finalPrompt = await enhancePrompt(prompt);

    // Step 2: Generate image using the enhanced prompt
    const response = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      { prompt: finalPrompt },
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    if (!response.data) {
      return res.status(502).json({
        success: false,
        message: "Image generation failed",
      });
    }

    // Deduct credit only after successful image generation
    user.creditBalance = user.creditBalance - 1;
    await user.save();

    const base64 = Buffer.from(response.data).toString("base64");

    return res.json({
      success: true,
      image: `data:image/png;base64,${base64}`,
      creditBalance: user.creditBalance,
    });

  } catch (err) {
    console.error("Image generation error:", err.message);

    return res.status(500).json({
      success: false,
      message: "Image generation failed",
    });
  }
};