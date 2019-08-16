import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Footer from './bodyComponents/Footer/Footer.jsx';
import Header from './bodyComponents/Header/Header.jsx';
import Page from './containers/Page.jsx';
import Navigation from './bodyComponents/Navigation/Navigation.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation />}
            </aside>
            <section >
              {<Page/>}
            </section>
          </main>
          <footer className="footer">
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
