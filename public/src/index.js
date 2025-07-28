// import React from 'react'; // dont need this in new update
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

// ReactDOM.render(<App/>, document.querySelector('#root'));