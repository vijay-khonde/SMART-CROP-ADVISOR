import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyCPgsNHnSlqw3xLlYWqQ6RmlZr0DOS5rzs";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

document.getElementById("predictBtn").addEventListener("click", async () => {
  const fileInput = document.getElementById("imageInput");
  if (!fileInput.files.length) {
    alert("Please select an image.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onloadend = async () => {
    const imageBase64 = reader.result.split(",")[1];

    try {
      const result = await model.generateContent([
        { inlineData: { data: imageBase64, mimeType: file.type } },
        { text: "Identify any plant disease visible in this image and suggest a short treatment plan in pointwise step by guidance so that farmer can easily for the image disease." }
      ]);

      document.getElementById("result").innerText =
        result.response.text() || "No text generated.";
    } catch (error) {
      document.getElementById("result").innerText = "❌ Error: " + error;
      console.error(error);
    }
  };
  reader.readAsDataURL(file);
});
