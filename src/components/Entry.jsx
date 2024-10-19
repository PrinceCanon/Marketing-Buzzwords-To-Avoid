import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="title">{props.term}</span>
      </dt>
      <dd>{props.definition}</dd>
    </div>
  );
}

export default Entry;
