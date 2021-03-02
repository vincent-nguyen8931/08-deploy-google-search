import React from "react";
// import logo from "../Untitled1.png"
import css from "./style.css"
import { Link } from "react-router-dom";
function Nav() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="nav-link" to="/">Google Books</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div class="w-100"> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/saved">Saved</Link>
                        </li>


                    </ul>
                    {/* </div> */}
                </div>

            </div>
        </nav>
    );
}

export default Nav;