// The below function is used to split the text into chunks of 200 words each.

export const chunkText = (text: string, chunkSize = 200) => {
    const words = text.split(/\s+/);
    const chunks: string[] = [];
    for (let i = 0; i < words.length; i += chunkSize) {
      chunks.push(words.slice(i, i + chunkSize).join(" "));
    }
    return chunks;
  };
  