import React from "react";
import Entry from "./Entry";
import buzzwords from "../buzzwords";

function createEntry(word) {
  return <Entry key={word.id} term={word.term} definition={word.definition} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>Marketing Buzzwords To Avoid</span>
      </h1>
      <dl className="dictionary">{buzzwords.map(createEntry)}</dl>
    </div>
  );
}

export default App;
