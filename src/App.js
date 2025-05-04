import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Header Component" />
      <div className="main-layout">
        <SideBar title="SideBar Component" />
        <Content title="Content Component" />
      </div>
      <Footer title="Footer Component" />
    </div>
  );
}
export default App;
