import React, { useEffect, useState } from 'react';
import { CharacterFetcher } from '../ApiHandler';
import Slider from 'react-slick';
import ImageBox from '../Components/ImageBox';

function ResultsContainer({ listOfGames, userArchetypes }) {
    const [characterLists, setCharacterLists] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const characters = [];
            for (let i = 0; i < listOfGames.length; i++) {
                const game = listOfGames[i];
                const gameCharacters = await CharacterFetcher(game.name, userArchetypes);
                characters.push(gameCharacters);
            }
            setCharacterLists(characters);
        };

        fetchCharacters();
    }, [listOfGames, userArchetypes]);

    return (
        <div>
            {characterLists.map((gameCharacters, index) => (
                <div key={index}>
                    <h2>{listOfGames[index].name}</h2>
                    <div className="game-cover">
                        <img src={listOfGames[index].image_url} alt={`Cover of ${listOfGames[index].name}`} />
                    </div>
                    <Slider>
                        {gameCharacters.map((character, charIndex) => (
                            <div key={charIndex}>
                                <ImageBox image={character.image_url} Name={character.name} Size={'100%'} />
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </div>
    );
}

export default ResultsContainer;
