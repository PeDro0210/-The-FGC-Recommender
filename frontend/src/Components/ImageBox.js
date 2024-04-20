
export function ImageBox({image, NumberOfImage, ProportionOfTheBox}) {

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

        <img src={image} alt = {NumberOfImage}/> {/* The image will be centered and will be 75% of the box*/}


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
