import axios from "axios";

export const getQuote = async () => {
  // default quote
  let quote = {
    author: "Franz Kafka",
    content: "I am a cage, in search of a bird.",
  };
  try {
    const data = await axios.get("https://api.quotable.io/random");

    if (!data || data.status !== 200) throw Error("Couldn't fetch quote");

    quote.author = data.data.author;
    quote.content = data.data.content;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    return quote;
  }
};
