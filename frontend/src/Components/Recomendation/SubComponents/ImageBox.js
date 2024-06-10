import React from 'react';
import "../styles/Results/ResultContainer.css";
/**
 * 
 * @param {image} image - The image that will be displayed in the box
 * @param {NumberOfImage} NumberOfImage - The number of the image that is being displayed (by category)
 * @param {Name} Name - The name of the image that is being displayed (Game name or character name)
 * @param {TypeOfBox} TypeOfBox - The type of box that is being displayed (game box or character box)
 * @param {Size} Size - The size of the image that is being displayed
 */

export function ImageBox({ image, NumberOfImage, Name, Size }) { // the TypeOfBox is to differentiate between game box and character box
    
    return (
        <>
            <div className="image-container">
                {/* |===========================================================| <- limit of the box
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           |
                    |                                                           | <- This box would be larger (larger than the width)
                    |===========================================================| <- end of the box */}
                    
                    {image && <img src={image} alt={"Image" + NumberOfImage} style={{ width: Size }} />} {/* The image will be centered and will be 75% of the box */}
                    
                </div>

                            <div className="name-container">
                                {/* 
                                |===========================================================| <- Where the box ends and the name of the image starts
                                |                                                           |
                                |                                                           | <- The name of the image centered and with the same font as the the QuestionPageHeader
                                |                                                           |
                                |===========================================================| <- end of the box
                                */}
                <p className="name">{Name}</p>
            </div>
        </>
    )
}
