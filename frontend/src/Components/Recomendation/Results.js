import React from 'react';
import Slider from 'react-slick';
import { CharacterBox } from './SubComponents/CharacterBox';
import "../../styles/Recomendations/Results/ResultContainer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState} from 'react';
import LoadingCircle from "../../styles/extras/LoadCircleFile"

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
        const fetchData = async () => {
            try {
                if (games.length == 0){
                    const response = await fetch(`http://127.0.0.1:8080/GetGames/${gameslist}/${archetypeslist}`);
                    const data = await response.json();
                    setGameList(data);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
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
                                    {/* TODO: Change to the Button for the characters */}
                                    <CharacterBox
                                        HyperLink={character.search_link}
                                        NumberOfImage={charIndex + 1}
                                        Name={character.name}
                                        Size={'60%'}
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <p>Characters for some reason Didn't Load</p>
                    )}
                </div>
            )
            )}
            {!loading && <button onClick={RestartPage} className="button">Vuelve a tomar el test</button>}

        </div>
    );
};

export default ResultsContainer;