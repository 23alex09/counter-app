import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Hola Gente!" subtitle={123} />
    </React.StrictMode>
)