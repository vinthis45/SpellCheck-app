import './App.css';
import React, { useState, useEffect } from "react";


const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
  th2: "the",
}

function App() {
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const words = inputText.split(" ");
    const correctedWords = words.map((item) => {
      const correctedWord  = customDictionary[item.toLowerCase()];
      return correctedWord || item;
    })

    correctedWords.join(" ");
    const firstCorrection = correctedWords.find((word, index) => word!==words[index]);
    setSuggestion(firstCorrection || "");
  };



  return (
    <div className="App">
      <h1>Spell Check and Auto-correction </h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {
        suggestion && (
          <p>
            Did you mean: <strong>{suggestion}</strong>?
          </p>
        )
      }
    </div>
  );
}

export default App;
