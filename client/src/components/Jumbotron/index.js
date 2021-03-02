import React from "react";
import BorderPage from "/Border"
function Jumbotron() {
    return (
        <BorderPage>
            <div
                style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
                className="jumbotron"
            >
                <h1>(React) Google Books Search</h1>
                <p>Search for and Save Books of Interest</p>
            </div>
        </BorderPage >
    );
}

export default Jumbotron;
