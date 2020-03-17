import React, { Component } from 'react';
import './App.scss';
import "circular-std"; //font
import Header from './components/layout/Header';
import MainPage from './components/layout/MainPage';
// import Projects from './components/layout/Projects';
import Loader from "./components/loader/Loader";
import Footer from './components/layout/Footer';
import ScrollableAnchor from 'react-scrollable-anchor';

const Sections = () => {
  const anchors = ['About'];
  const sectionsArray = [<MainPage />];
  return (anchors.map((item, index) => { return (<ScrollableAnchor id={item} key={index}><div>{sectionsArray[index]}</div></ScrollableAnchor>) }));
}

class App extends Component {  
  render() {
    return (
      <div className="App">
        <Loader />
        <Header />
        <Sections />
        <Footer />
      </div>
    );
  }
}

export default App;