"use server";

import { auth } from "@/auth";

export const getSessionData = async () => {
    "use server"
  const session = await auth();
  return session;
};