import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
// import Jumbotron from "./components/Jumbotron";
// import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import Results from "./components/Results";
// import Main from "./components/Main";
// import BookSearch from "./components/BookSearch";
import Search from "./pages/Search";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />

        {/* <Jumbotron /> */}

        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        {/* <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} /> */}
        <Route exact path="/saved" component={Saved} />
        {/* </Switch> */}

        {/* <Search /> */}
      </div>
    </Router>
  );
}

export default App;



