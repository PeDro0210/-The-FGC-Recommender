import { useEffect, useState } from 'react';
import ImageBox from './ImageBox';
import CharacterFetcher from './CharacterFetcher';

export default function ResultsContainer({ listOfGames, userArchetypes }) {
    const [characterLists, setCharacterLists] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const characterLists = await Promise.all(
                listOfGames.map(async (gameObj) => {
                    const characters = await CharacterFetcher(gameObj.name, userArchetypes);
                    return {
                        gameName: gameObj.name,
                        characters: characters,
                    };
                })
            );
            setCharacterLists(characterLists);
        };

        fetchCharacters();
    }, [listOfGames, userArchetypes]);

    return (
        <>
            <div className="Games">
                {listOfGames.map((gameObj, index) => (
                    <div key={index}>
                        <ImageBox
                            image={gameObj.image_url}
                            NumberOfImage={index + 1}
                            Name={gameObj.name}
                            Size={'15%'}
                        />
                        <div className="Characters">
                            {characterLists[index]?.characters.map((character, characterIndex) => (
                                <ImageBox
                                    key={characterIndex}
                                    image={character.image_url}
                                    NumberOfImage={characterIndex + 1}
                                    Name={character.name}
                                    Size={'10%'}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
