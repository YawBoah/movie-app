import React from "react";
import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=1a574970";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Antman");
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
