// src/App.js
import React from 'react';
import "../src/styles/app.css";
import ResultsContainer from '../src/Pages/ResultsContainer'; // Asegúrate de que la ruta es correcta



function App() {
    return (
        <div className="main-content">
            <div className="Header-one">
                <div className="rounded-box">
                    <h1>The FGC Recommender</h1>
                </div>
            </div>

            <div className="Content">
                <ResultsContainer/>
                <h1>WIP</h1>
            </div>

            <div className="Footer-one">
                <h1>idunno what to add here RN NGL</h1>
            </div>
        </div>
    );
}

export default App;
