import React from "react";
import Entry from "./components/Entry.jsx";
import buzzwords from "./buzzwords.js";
import Alternative from "./components/Alternative.jsx";

function App() {
  return (
    <div>
      <h1>
        <span>Marketing Buzzwords To Avoid</span>
      </h1>
      <dl className="dictionary">
        {buzzwords.map((buzzword) => (
          <Entry
            key={buzzword.id}
            term={buzzword.term}
            definition={buzzword.definition}
            alternatives={buzzword.alternatives}
          />
        ))}
      </dl>
    </div>
  );
}
    
export default App;
