import React from "react";
import Alternative from "./Alternative";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="title">{props.term}</span>
      </dt>
      <dd>{props.definition}</dd>

      <strong className="alt-title">Alternatives:</strong>

      <div className="alternatives-container">
        {props.alternatives.map((alt, index) => (
        <Alternative
          key={index}
            alternativeWord={alt}
          />
        ))}
      </div>

    </div>
  );
}

export default Entry;
