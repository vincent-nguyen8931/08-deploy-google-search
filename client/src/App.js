import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Results from "./components/Results";
import Main from "./components/Main";
import BookSearch from "./components/BookSearch";

function App() {
  return (
    <div>
      <Nav />

      <Jumbotron />

      <BookSearch />
      <Results />
      {/* <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} /> */}
      {/* <Route exact path="/saved" component={Saved} /> */}
      {/* </Switch> */}

      {/* <Search /> */}
    </div>
  );
}

export default App;



