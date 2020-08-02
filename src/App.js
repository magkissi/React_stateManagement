import React from "react";
import "./App.css";
import Movielist from "./movielist";
import Nav from "./nav";
import { MovieProvider } from "./movieContext";
import AddMovie from "./addMovie";

function App() {
  return (
    <MovieProvider>
    <div className="App">
        <Nav />
        <AddMovie />
        <Movielist /> 
      </div>
    </MovieProvider>
  );
}

export default App;
