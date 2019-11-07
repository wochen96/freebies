import React from 'react';
import logo from './logo.svg';
import './App.css';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App; */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button className="Home">

          </button>

          <p>
            Username: someuser@gmail.com
          </p>

          <button className="SIGNOUT">

          </button>

          <p className="Search">
            SEARCH
          </p>

          // add search icon later

          <button className="Definite">

          </button>

          <button className="Indefinite">

          </button>

          <button className="Add">

          </button>

          // add the plus icon

        </nav>
        
      </header>

      <body className="App-body">
        <div>
          // middle section
        </div>

      </body>

      <footer className="App-footer">

        <button className="Contact">
        
        </button>        

        <button className="About_us">

        </button>

      </footer>

    </div>
  );
}

export default App;


