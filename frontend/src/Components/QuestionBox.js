
/**
 * 
 * React Component that displays the questions and the possible answers
 * 
 * @param {Object} Answear - Object containing the Answears and the Category that gives points to
 * @param {Function} PointsAdder - Function that adds the points to the category that the question corresponds to or removes the points if the the question is de-selected
 *  
 *  
 */


// NOTE: only one answer can be selected at a time (for simplicity), maybe I can scale it up later or maybe not, how knows.
// Or maybe I do, at the end Everything for th FGC 🫡🫡🫡🫡🫡🫡!!!!!!!!!!!


export function QuestionBox({Answear, PointsAdder, Question}) {

    return (
        <>
        <div className = "Question">

            {/*
            Example
            |===========================================================|
            | 1) What's your favorite way of playing                    | <- Number Question and Question it self
            |                                                           |
            |                                                           | <- Space for the questions            
            */}

        </div>
        
        <div className = "SelectionBox">

            {/*
            Example
            |                                                          |
            |  ☐ a) Agressive and fast paced                           | <- Selection Box (Each answear will have the have the category that gives points too)
            |  ☐ b) Defensive and slow paced                           | <- Selection Box (Each answear will have the have the category that gives points too)
            |  ☐ c) Balanced and strategic                             | <- Selection Box (Each answear will have the have the category that gives points too) 
            |  ☐ d) I don't know                                       | <- Selection Box (Each answear will have the have the category that gives points too)
            |                                                          |
            |===========================================================|
            

            */}

        </div>
        </> 
    )
}
