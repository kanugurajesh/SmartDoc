// the code in this repo is used to query the embeddigns in the vector database

import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});

const pineconeIndex = process.env.Pinecone_Index as string;
const vectorSize = Number(process.env.VECTOR_NUMBER);

const queryEmbeddings = async (
  queryText: string,
  pineconeNamespace: string
) => {
  const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
  const result = await model.embedContent(queryText);
  const queryVector = result.embedding.values;

  const index = pc.index(pineconeIndex);

  const queryResponse = await index.namespace(pineconeNamespace).query({
    topK: vectorSize,
    vector: queryVector,
    includeMetadata: true,
  });

  if (queryResponse.matches.length === 0) {
    return [];
  }

  if (queryResponse.matches[0]) {
    if (queryResponse.matches[0].metadata) {
      console.log("Query Results:", queryResponse.matches[0].metadata.text);
    } else {
      console.log("Metadata is undefined");
    }
  }

  return queryResponse;
};

const combineText = async (queryResponse: any, length: number) => {
  const combinedText = queryResponse.matches
    .slice(0, length)
    .map((match: any) => match.metadata.text)
    .join(" ");

  return combinedText;
};

const getData = async (queryText: string, namespace: string) => {
  const response = await queryEmbeddings(queryText, namespace);
  if (Array.isArray(response) && response.length === 0) {
    return [];
  }

  const combinedText = await combineText(response, vectorSize);

  return combinedText;
};

// const generateAnswer = async (queryText: string, namespace: string) => {
//   const answer = await getData(queryText, namespace);
//   const prompt = `Can you answer the question ${queryText} based on the following context: ${answer}`;

//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//   const result = await model.generateContent(prompt);

//   return result.response.text();
// };

// export { generateAnswer };

export { getData };
