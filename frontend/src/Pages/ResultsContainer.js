import React from 'react';
import Slider from 'react-slick';
import { ImageBox } from '../Components/ImageBox';
import "../styles/Results/ResultContainer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState} from 'react';
import LoadingCircle from "../styles/extras/LoadCircleFile"

const ResultsContainer = ({gameslist, archetypeslist}) => {
    
    // General settings for the slider
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


    const [games, setGameList]  = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/GetGames/`+gameslist+`/`+archetypeslist)
        .then(response => response.json())
        .then(data => {
            setGameList(data);
            setLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const RestartPage = () => {
        window.location.reload();
    }

    return (
        <div className="results-container">
            {loading && <LoadingCircle />}
            {!loading && games.map((game, index) => (
                <div key={index} className="game-container">
                    <div className="cover-container">
                        <img src={game.image_url} alt={game.name} className="cover-image" />
                        <p className="game-name">{game.name}</p>
                    </div>
                    {/* We taking this cause of time */}
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
            )
            )}
            {!loading && <button onClick={RestartPage} className="button">Vuelve a tomar el test</button>}

        </div>
    );
};

export default ResultsContainer;