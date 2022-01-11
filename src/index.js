import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import App from './App';
import About from '../src/components/About'





ReactDOM.render( 

    <Router>
        <App />
       
    </Router>

,document.getElementById('root')
);

