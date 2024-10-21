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
    // Await the result of embedding generation
    const result = await model.embedContent(chunk);
    embeddings.push({
      id: `chunk-${index}`,
      values: result.embedding.values,
      metadata: {
        chunkIndex: index,
        text: chunk,
      },
    });
  }
  return embeddings;
};

export { generateEmedding };
