// The below code snippet is used to generate embeddings for the text data using the Google Generative AI API. The text data is split into chunks of 200 words each, and embeddings are generated for each chunk using the `embedContent` method of the `GoogleGenerativeAI` class. The embeddings are stored in an array along with the chunk index and text data for reference. The generated embeddings are then logged to the console and returned as an array.

// generateEmbeddings.js
import { chunkText } from "@/utils/chunkText"; // Adjust the path as necessary
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const generateEmedding = async (data: string) => {
  const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

  // Split the data into chunks
  const chunks = chunkText(data, 200); // Adjust chunk size as needed

  // Generate embeddings for each chunk
  const embeddings: {
    id: string;
    values: number[];
    metadata: { chunkIndex: number; text: string };
  }[] = [];
  for (const [index, chunk] of chunks.entries()) {
    model.embedContent(chunk).then((result) => {
      embeddings.push({
        id: `chunk-${index}`,
        values: result.embedding.values,
        metadata: {
          chunkIndex: index,
          text: chunk,
        },
      });
    });
  }

  console.log("Generated Embeddings:", embeddings);
  return embeddings;
};

export { generateEmedding };
