
export function Questions() {    
    // JSON object that contains the questions and the category that gives points to (CON LA CANTIDAD DE PUNTOS QUE DA)
    let QuestionCategories = {"Category":[],"Points":[]}

    /*
    Function that adds the points to the category that the question corresponds to or removes the points if the the question is de-selected
    @param (Category) - String that contains the category that the question corresponds to
    @param (Points) - Integer that contains the points that the question corresponds to
    */

    const PointAdder = (Category) => {
        // TODO: Add the points to the category that the question corresponds to or remove the points if the the question is de-selected 

    }

    // TODO: Call the QuestionFetcher function to get the questions and make the QuestionBox component to show the questions.
    // TODO: make a submit button that will return all the QuestionCategories once all questions are answered to the ResultReciever, to be send to the react backend
    
    return (
        <>

        <div className="Questions">
            {/* 
                                    |-----------------------------------------------------------|<-here ends the header                                     
                                    |                                                           | 
                                    |                                                           |
                                    |(QuestionComponents                                        |
                                    |   Question                                                |      
                                    | SelectionBox   (answear)                                   | <- and the components will have there own dimensions
                                    |                                                           |
                                    |)                                                          | 
                                    |                                                           |
                                    |                                                           |
                                    |                                                           |
                                    |                                                           |
                                    |                                                           |
                                    |                                                           |
                                    |                                                           | <- and keeps going until the footer
                                    |-----------------------------------------------------------| <- and here goes the footer
            
            */}
        </div>
        
        </>
    )
}

