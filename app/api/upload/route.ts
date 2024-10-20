import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { promises as fs } from "fs";
import PDFParser from "pdf2json";
import { auth } from "@/auth";

export async function POST(req: NextRequest) {
  const formData: FormData = await req.formData();
  const uploadedFile = formData.get("file");

  let parsedText = "";
  let fileName = "";

  if (uploadedFile && uploadedFile instanceof File) {
    fileName = uuidv4();

    const tempFilePath = `/tmp/${fileName}`;

    const fileBuffer = Buffer.from(await uploadedFile.arrayBuffer());

    await fs.writeFile(tempFilePath, fileBuffer);

    const pdfParser = new (PDFParser as any)(null, 1);

    // Create a promise to handle the parsing
    const parsingPromise = new Promise((resolve, reject) => {
      pdfParser.on("pdfParser_dataError", (errData: any) => {
        console.error(errData.parserError);
        reject(errData.parserError); // Reject the promise on error
      });

      pdfParser.on("pdfParser_dataReady", () => {
        parsedText = (pdfParser as any).getRawTextContent();
        resolve(parsedText); // Resolve the promise with parsed text
      });
    });

    // Load and parse the PDF
    await pdfParser.loadPDF(tempFilePath);
    await parsingPromise; // Wait for the parsing to complete
  } else {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  // After the content has been extracted from the PDF, we can store the data in the vector database

  const session = await auth();

  

  console.log(session?.user?.email);

  return NextResponse.json({ parsedText, fileName });
}
