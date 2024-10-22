"use server";

import { Pinecone } from "@pinecone-database/pinecone";
import { getSessionData } from "@/actions/getSession";

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY as string });
const index = pc.index(process.env.PINECONE_INDEX as string);

const deleteData = async () => {
  try {
    const data = await getSessionData();

    await index.namespace(data?.user?.email as string).deleteAll();

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export { deleteData };
