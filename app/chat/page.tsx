"use client";

import { useEffect, useState, useRef } from "react";
import { Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Toggle from "@/components/Toggle";
import Profile from "@/components/profile";
import queryText from "@/utils/queryText";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function Component() {
  const [userImage, setUserImage] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setUserImage(session?.user?.image as string);
    };

    fetchSession();
  }, []);

  const scrollToBottom = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    {
      id: 2,
      text: "Hi! I have a question about your services.",
      sender: "user",
    },
    {
      id: 3,
      text: "Of course! I'd be happy to help. What would you like to know?",
      sender: "bot",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newMsg: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: "user",
      };
      setMessages([...messages, newMsg]);

      queryText(newMessage).then((response) => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: response,
          sender: "bot",
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      });

      setNewMessage("");
    }
  };

  return (
    <main className="p-4 flex flex-col gap-12 min-h-screen h-screen relative">
      <div>
        <div className="absolute inset-0 top-4 left-4 z-30 w-fit">
          <Toggle />
        </div>
        <div className="absolute inset-0 top-4 right-4 z-10">
          <Profile />
        </div>
      </div>
      <Card className="w-full mx-auto h-full flex flex-col justify-between z-40">
        <CardHeader>
          <CardTitle className="text-2xl tracking-wide">SmartDoc</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex items-start mb-4 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
                ref={index === messages.length - 1 ? sectionRef : null} // Set ref on the last message
              >
                {message.sender === "bot" && (
                  <Avatar className="mr-2">
                    <AvatarImage src="/placeholder-avatar.png" alt="Bot" />
                    <AvatarFallback>Bot</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-lg p-3 max-w-[70%] ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === "user" && (
                  <Avatar className="ml-2">
                    <AvatarImage src={userImage as string} alt="User" />
                    <AvatarFallback>You</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex w-full items-center space-x-2"
          >
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </main>
  );
}
