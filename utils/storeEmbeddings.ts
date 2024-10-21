// The code in this file is used to store the embeddings in the vector database

import { Pinecone } from "@pinecone-database/pinecone";
import { generateEmedding } from "@/utils/generateEmbeddings";

const pineconeIndex = process.env.Pinecone_Index as string;

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});

// The below function is used to check if the Index is already present
const checkIndex = async (Index: string) => {
  try {
    await pc.describeIndex(Index);
    return true;
  } catch (error) {
    return false;
  }
};

const storeEmbeddings = async (data: string, namespace: string) => {

  // If the index is not present then create the index
  if (!checkIndex(pineconeIndex)) {
    await pc.createIndex({
      name: pineconeIndex,
      dimension: 768,
      metric: "cosine",
      spec: {
        serverless: {
          cloud: "aws",
          region: "us-east-1",
        },
      },
    });
  }

  // The below creates the embeddings with the help of generateEmbedding function
  const embeddings = await generateEmedding(data);

  const index = pc.index(pineconeIndex);

  // uploading the embeddings to the namespace in the index
  await index.namespace(namespace).upsert([...embeddings]);
};

export { storeEmbeddings };