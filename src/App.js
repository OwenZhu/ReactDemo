import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'

import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph."

export default App;
