import { readFile, writeFile, appendFile } from "fs/promises";
import { PDFParse, type TextResult } from "pdf-parse";
const FURTHER_READING = /^Further reading\n(?:.+\n)*?(•.*(?:\n.+)*)/dgm;

const parse = async (buffer: Uint8Array): Promise<TextResult> => {
  return new PDFParse(buffer).getText();
};
const getReferences = async (filePath: string): Promise<void> => {
  try {
    const buffer = await readFile(filePath, {});
    const uint8 = new Uint8Array(
      buffer.buffer,
      buffer.byteOffset,
      buffer.byteLength,
    );
    const textResult = await parse(uint8);
    const matcher = textResult.text.matchAll(FURTHER_READING);
    await writeFile("references.txt", `List of references:\n`, "utf-8");

    for (const m of matcher) {
      await appendFile("references.txt", m[1]);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

getReferences(process.argv[2]);
