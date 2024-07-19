import React, { useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

const LimitedCharacters = ({ text, maxLength, blogSlug }) => {
  const [showFull, setShowFull] = useState(false);
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/BlogDetail/${blogSlug}`);
  };

  if (text.length <= maxLength) {
    return <ReactMarkdown>{text}</ReactMarkdown>;
  }

  return (
    <>
      {showFull ? (
        <ReactMarkdown>{text}</ReactMarkdown>
      ) : (
        <>
          <ReactMarkdown>{`${text.slice(0, maxLength)}...`}</ReactMarkdown>
          <button onClick={handleReadMore} className="readMoreButton">
            Read More...
          </button>
        </>
      )}
    </>
  );
};

export default LimitedCharacters;
