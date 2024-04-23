

/**
 * 
 * @param {image} image - The image that will be displayed in the box
 * @param {NumberOfImage} NumberOfImage - The number of the image that is being displayed (by category)
 * @param {Name} Name - The name of the image that is being displayed (Game name or character name)
 * @param {TypeOfBox} TypeOfBox - The type of box that is being displayed (game box or character box)
 */

export function ImageBox({image, NumberOfImage, Name, TypeOfBox}) {//the TypeOfBox is to differentiate between game box and character box

    return (
        <>
        <div className="Image">
        {/* 
        
        |===========================================================| <- limit of the box
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
        |                                                           |
        |                                                           |
        |                                                           | <- This box would be larger (larger than the width)
        |===========================================================| <- end of the box
        
        */}

        <img src={image} alt = {"Image"+NumberOfImage}/> {/* The image will be centered and will be 75% of the box*/}


        </div>

        <div className="NameOfTheImage">
        {/* 
        
        |===========================================================| <- Where the box ends and the name of the image starts
        |                                                           |
        |                                                           | <- The name of the image centered and with the same font as the the QuestionPageHeader
        |                                                           |
        |===========================================================| <- end of the box

        */}
        </div>
        </>
    )
}
