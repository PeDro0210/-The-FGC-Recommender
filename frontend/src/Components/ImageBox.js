import React from 'react';

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
            <div className="Image" style={styles.imageContainer}>
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
                |                                                           |
                |                                                           | <- This box would be larger (larger than the width)
                |===========================================================| <- end of the box */}

                <img src={image} alt={"Image" + NumberOfImage} style={{ ...styles.image, width: Size }} /> {/* The image will be centered and will be 75% of the box */}

            </div>

            <div className="NameOfTheImage" style={styles.nameContainer}>
                {/* 
                |===========================================================| <- Where the box ends and the name of the image starts
                |                                                           |
                |                                                           | <- The name of the image centered and with the same font as the the QuestionPageHeader
                |                                                           |
                |===========================================================| <- end of the box
                */}
                <p style={styles.name}>{Name}</p>
            </div>
        </>
    )
}

const styles = {
    imageContainer: {
        position: 'relative',
        width: '20%',
        paddingBottom: '1%', // Makes the container width to create an aspect ratio
        backgroundColor: '#fcf8ec', // Background color from the provided palette
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        border: '6px solid #79a3b1', // Optional: border color from the palette
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',
    },
    nameContainer: {
        textAlign: 'center',
        marginTop: '0.5rem', // Optional: spacing between image and name
        backgroundColor: '#d0e8f2', // Background color from the provided palette
        padding: '0.5rem', // Optional: padding for the name container
        borderRadius: '10px', // Optional: to give a slightly rounded appearance
    },
    name: {
        fontFamily: 'inherit', // Ensures the same font as QuestionPageHeader
        fontSize: '1rem', // Adjust as needed
        color: '#456268', // Text color from the provided palette
    },
    
};
