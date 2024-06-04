import React from 'react';
import "../../../styles/Recomendations/Results/ResultContainer.css";
/**
 * 
 * @param {image} image - The image that will be displayed in the box
 * @param {NumberOfImage} NumberOfImage - The number of the image that is being displayed (by category)
 * @param {Name} Name - The name of the image that is being displayed (Game name or character name)
 * @param {TypeOfBox} TypeOfBox - The type of box that is being displayed (game box or character box)
 * @param {Size} Size - The size of the image that is being displayed
 */

export function CharacterBox({ HyperLink, NumberOfImage, Name, Size }) { // the TypeOfBox is to differentiate between game box and character box
    
    return (
        <>
            <div className="name-container">
                {/* 
                |===========================================================| <- Where the box ends and the name of the image starts
                |                                                           |
                |                                                           | <- The name of the image centered and with the same font as the the QuestionPageHeader
                |                                                           |
                |===========================================================| <- end of the box
                */}
                <a href={HyperLink} className="name" target="_blank">{Name}</a>
            </div>
        </>
    )
}