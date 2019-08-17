import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Footer from './layouts/Footer/Footer.jsx';
import Header from './layouts/Header/Header.jsx';
import Page from './containers/page/Page.jsx';
import Navigation from './layouts/Navigation/Navigation.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
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
          <footer className='footer'>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
