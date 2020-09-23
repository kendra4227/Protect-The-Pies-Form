import React from 'react';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Form from "./components/Form.js"
import LoginButton from "./components/LoginButton.js"
import {BrowserRouter as Router,Link} from 'react-dom'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <Form/>
    <LoginButton/>
    <Footer/>
   
    
    </div>
  );
}

export default App;
