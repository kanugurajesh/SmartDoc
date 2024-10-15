"use client";

import Image from "next/image";
import { getSessionData } from "@/actions/getSession";
import { useEffect, useState } from "react";
import SignOut from "./sign-out";
import { Session } from "@/types/types";
import Link from "next/link";

const Profile = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [show, setShow] = useState(false);

  // use async await to get session data
  useEffect(() => {
    const fetchData = async () => {
      const res = await getSessionData();
      if (res && res.user) {
        setSession(res as Session);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative">
      {session && (
        <div>
          <Image
            src={session.user.image as string}
            alt=""
            width={35}
            height={35}
            className="rounded-full absolute right-1 cursor-pointer"
            onClick={() => setShow(!show)}
          />
          {show && (
            <div className="bg-white absolute right-1 top-10 rounded-md shadow-sm shadow-gray-400 dark:text-black">
              <div className="p-3 pr-10">
                <p className="font-semibold">{session.user.name}</p>
                <p className="text-sm mt-[-2px]">{session.user.email}</p>
              </div>
              <Link
                href="/admin"
                className="py-2 flex items-center justify-center bg-gray-200 text-black rounded-md font-semibold hover:bg-black hover:text-white transition-all ease-in-out duration-300"
              >
                Admin
              </Link>
              <Link
                href="/home"
                className="py-2 flex items-center justify-center bg-gray-200 text-black rounded-md font-semibold hover:bg-black hover:text-white transition-all ease-in-out duration-300 my-2"
              >
                Home
              </Link>
              <SignOut />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;