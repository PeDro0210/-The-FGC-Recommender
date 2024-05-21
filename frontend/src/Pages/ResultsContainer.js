// src/Components/ResultsContainer.js
import React from 'react';
import Slider from 'react-slick';
import { ImageBox } from '../Components/ImageBox'; // Asegúrate de que la ruta es correcta
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResultsContainer = ({ games }) => {
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

    return (
        <div className="results-container">
            {games.map((game, index) => (
                <div key={index} className="game-container">
                    <div className="cover-container">
                        <img src={game.image_url} alt={game.name} className="cover-image" />
                        <p className="game-name">{game.name}</p>
                    </div>
                    <Slider {...sliderSettings}>
                        {game.characters.map((character, charIndex) => (
                            <div key={charIndex}>
                                <ImageBox
                                    image={character.image_url}
                                    NumberOfImage={charIndex + 1}
                                    Name={character.name}
                                    Size={'100%'}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
};

export default ResultsContainer;
