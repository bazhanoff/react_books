import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 

import App from './App';

import 'material-components-web/dist/material-components-web.css';
import './index.css';

import books from './data/books';
import topics from './data/topics';

ReactDOM.render(
    <Router>
        <App topics={topics} books={books} /> 
    </Router>, 
    document.getElementById('root')
);