import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "contexts/UserContext";

function App() {
  return (
      <Router>
        <Routes />
      </Router>
  );
}

export default App;
