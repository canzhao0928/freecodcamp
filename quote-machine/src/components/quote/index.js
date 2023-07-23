import Quotes from "../Quotedata/Quotedata";
import { useState } from "react";

export default function Quote() {
  const [index, setIndex] = useState(0);
  const handleLoad = () => {
    setIndex(Math.floor(Math.random() * Quotes.length));
  };

  return (
    <div className="container mx-auto mt-5" Style="width: 25%" id="quote-box">
      <p id="text">"{Quotes[index].quote}</p>
      <p className="text-end" id="author">
        -{Quotes[index].author}
      </p>
      <button onClick={handleLoad} className="btn btn-primary" id="new-quote">
        New quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${Quotes[index].quote}-${Quotes[index].author}"`}
      >
        tweet
      </a>
    </div>
  );
}
