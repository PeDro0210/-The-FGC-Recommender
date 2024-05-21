// src/App.js
import React from 'react';
import "../src/styles/app.css";
import ResultsContainer from '../src/Pages/ResultsContainer'; // Asegúrate de que la ruta es correcta

const games = [
  {
    name: "Tekken 7",
    image_url: "https://media.discordapp.net/attachments/1239767599986905149/1239767960240001136/4yfeeKKfJdD5WzDQsoiM3xrcqPlpDLm7.jpeg?ex=664e02a3&is=664cb123&hm=3a57c37102cbea0855c03119d27872d8c77d0b24f1fe8bad47e0adaf67343e39&=&format=webp",
    characters: [
    ]
  },

];

function App() {
    return (
        <div className="main-content">
            <div className="Header-one">
                <div className="rounded-box">
                    <h1>The FGC Recommender</h1>
                </div>
            </div>

            <div className="Content">
                <ResultsContainer games={games} />
                <h1>WIP</h1>
            </div>

            <div className="Footer-one">
                <h1>idunno what to add here RN NGL</h1>
            </div>
        </div>
    );
}

export default App;
