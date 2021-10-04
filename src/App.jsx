import React from "react";
import Router from "./Router";
import "./assets/reset.css";
import "./assets/style.css";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <div className="body-background">
        <Header />
        <main className="c-main">
          <Router />
        </main>
      </div>
    </>
  );
};

export default App;
