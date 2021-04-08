import React from "react";
import style from "./style.css";
// import BorderPage from "/Border"

function Header() {
  return (
    <div className="jumbotron2">
      <div class="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <h2 className="display-4">(React) Google Books Search</h2>
              <h3>Search for and Save Books of Interest</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;