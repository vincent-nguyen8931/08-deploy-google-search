import React from "react";
import ResultListItem from "../ResultListItem"


function results() {
  return (
    <div className="jumbotron3">
      <h2 className="display-4">Results:</h2>
      {/* <ul className="list-group">{props.children}</ul> */}
    <ResultListItem />
    </div>
    );
}
export default results;