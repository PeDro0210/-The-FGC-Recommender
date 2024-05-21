// src/App.js
import React from 'react';
import "../src/styles/app.css";
import ResultsContainer from '../src/Pages/ResultsContainer'; // Asegúrate de que la ruta es correcta

const games = [
  {
    name: "Tekken 7",
    image_url: "https://media.discordapp.net/attachments/1239767599986905149/1239767960240001136/4yfeeKKfJdD5WzDQsoiM3xrcqPlpDLm7.jpeg?ex=664e02a3&is=664cb123&hm=3a57c37102cbea0855c03119d27872d8c77d0b24f1fe8bad47e0adaf67343e39&=&format=webp",
    characters: [
      { name: "Kazuya", image_url: "https://media.discordapp.net/attachments/1239767599986905149/1240321229110378536/Kazuya_1.png?ex=664e0ba9&is=664cba29&hm=9af97a2d0d46a6cef2b0997648a73a5681e07f38c2a1bc904f34fd01013ea3d4&=&format=webp&quality=lossless" },
      { name: "Heihachi", image_url: "https://media.discordapp.net/attachments/1239767599986905149/1240319142851248179/Heihachi.jpg?ex=664e09b7&is=664cb837&hm=6081977d46030e8b8d127b94c4bcdecbc5365a6cc501352bbf7828fb7a9b4a61&=&format=webp" },

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
