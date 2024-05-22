import React from 'react';
import Slider from 'react-slick';
import { ImageBox } from '../Components/ImageBox';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResultsContainer = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    // Just for testing, change to the Fetching Function
    const games = [
    {
    name: "Tekken 7",
    image_url: "https://media.discordapp.net/attachments/1239767599986905149/1239767960240001136/4yfeeKKfJdD5WzDQsoiM3xrcqPlpDLm7.jpeg?ex=664e02a3&is=664cb123&hm=3a57c37102cbea0855c03119d27872d8c77d0b24f1fe8bad47e0adaf67343e39&=&format=webp",
    characters: [
        { name: "Kazuya", image_url: "https://media.discordapp.net/attachments/1239767599986905149/1240321229110378536/Kazuya_1.png?ex=664e0ba9&is=664cba29&hm=9af97a2d0d46a6cef2b0997648a73a5681e07f38c2a1bc904f34fd01013ea3d4&=&format=webp&quality=lossless" },
        { name: "Heihachi", image_url: "https://media.discordapp.net/attachments/1239767599986905149/1240319142851248179/Heihachi.jpg?ex=664e09b7&is=664cb837&hm=6081977d46030e8b8d127b94c4bcdecbc5365a6cc501352bbf7828fb7a9b4a61&=&format=webp" },
        ],
        

    }
    ];

    return (
        <div className="results-container">
            {games.map((game, index) => (
                <div key={index} className="game-container">
                    <div className="cover-container">
                        <img src={game.image_url} alt={game.name} className="cover-image" />
                        <p className="game-name">{game.name}</p>
                    </div>
                    {game.characters.length > 0 ? (
                        <Slider {...sliderSettings}>
                            {game.characters.map((character, charIndex) => (
                                <div key={charIndex}>
                                    <ImageBox
                                        image={character.image_url}
                                        NumberOfImage={charIndex + 1}
                                        Name={character.name}
                                        Size={'60%'}
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p>No hay personajes para este juego</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ResultsContainer;
