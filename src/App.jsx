import React from "react";
import Entry from "./components/Entry.jsx";
import buzzwords from "./buzzwords.js";

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
