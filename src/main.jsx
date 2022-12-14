import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import './index.css';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
    <React.StrictMode>
        <FirstApp title='Hello, World!' />
    </React.StrictMode>
)