import React, { Component } from 'react';
import './css/style.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header/>

        <Home/>

        <main>
          <About />
          <Portfolio />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
