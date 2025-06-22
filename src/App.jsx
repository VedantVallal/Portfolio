import React from 'react';
import './App.css';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';


const App = () => {



  return (


    <div className="App">
      <Loader/>
      <Home/>
      <Header />


      {/* <Projects />
      <Contact />
      <Footer />  */}
    </div>
  );
};

export default App;
