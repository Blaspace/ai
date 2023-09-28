import React, { useState } from "react";
import { MdSend } from "react-icons/md";

function Image() {
  const [img, setImg] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState(null);

  const genImage = async () => {
    if (prompt) {
      setMessage(prompt);
      const apiKey = "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";
      try {
        const response = await fetch(
          "https://api.openai.com/v1/images/generations",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt,
              n: 1,
              size: "1024x1024",
            }),
          }
        );
        const data = await response.json();
        setImg(`${data.data[0].url}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="chat">
      <div className="chatArea">
        {message && (
          <article>
            <p>{message}</p>
          </article>
        )}
        {img && (
          <span>
            <img src={img} alt="dall.e" />
          </span>
        )}
      </div>
      <form>
        <input type="text" onChange={(e) => setPrompt(e.target.value)} />
        <span onClick={genImage}>
          <MdSend size={30} className="send" />
        </span>
      </form>
    </div>
  );
}

export default Image;
