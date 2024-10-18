import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji">{props.term}</span>
      </dt>
      <dd>{props.definition}</dd>
    </div>
  );
}

export default Entry;
