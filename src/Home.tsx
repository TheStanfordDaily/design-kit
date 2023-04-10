import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
  <div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
    <Link to="/foo">Foo</Link>
    <Link to="/bar">Bar</Link>
    <Link to="/floating">Floating</Link>
  </header>
</div>)
}
