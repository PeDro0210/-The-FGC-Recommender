
//llamar al game fetcher, le doy un juego y arquetipos, y devulve los personajes y archetypes en base al tiutlo del juego.


export default function ResultsContainer({ListOfGames,archetypes}) {
    return (
        <>
        {/* 
        For each ImageBox for games, there will be a corresponding ImageBox for the characters below it.

        Example:

        IMAGEBOX
        CHARACTERBOX CHARACTERBOX2 CHARACTERBOX3 CHARACTERBOX4

        */}

        <div className="Games">
        {ListOfGames.map((gameObj, index) => (
                    <ImageBox
                        key={index}
                        image={gameObj.image_url}
                        NumberOfImage={index + 1}
                        Name={gameObj.name}
                        Size={'15%'}
                    />
                ))}

        </div>
        <div className="Characters">

        {imageList.map((imgObj, index) => (
                    <ImageBox
                        key={index}
                        image={imgObj.image_url}
                        NumberOfImage={index + 1}
                        Name={imgObj.name}
                        Size={'15%'}
                    />
                ))}

        </div>
        </>
    );
}

