"use client";
//import Image from "next/image";
//import styles from "./page.module.css";
import styles from "./chatbot.css";
import { formatResult } from "../lib/utils/formatResults.js";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  async function sendPrompt() {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    const formattedResult = formatResult(data.content || data.error);
    setResult(formattedResult);
  }

  return (
    //TODO: Make your UI look better by adding additional elements and styles as you wish! Possibly add your styles to a new css file called chatbot.css, and import that file in this page
    <main style={{ padding: "2rem" }}>
      <h1>My Next.js Chatbot</h1>
      <div className="chatbotContainer">
        <textarea
          rows="5"
          cols="50"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask me a question..."
      />
      <br />
      <button onClick={sendPrompt}>Generate</button>
      </div>

      <pre>{result}</pre>
    </main>
  );
}
