
import React from 'react';
import "../../../styles//Recomendations/Questions/QuestionBox.css";


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


export function QuestionBox({Answear, PointsAdder, Question, Number}) {
    const Name = "radio" + Number
    const CheckIfSelected = () => {
        if (document.querySelector('input[name="'+Name+'"]:checked') != null) {
            return true
        }
        return false
    }
    return (
        <div>
            <div className="Question">
                <h1>{Number}. {Question}</h1>
                <hr/>
            </div>
        
            <div className="SelectionBox">
                <label className="container">{Answear[0]}
                    <input type="radio" name={Name} value={PointsAdder[0]}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">{Answear[1]}
                    <input type="radio" name={Name} value={PointsAdder[1]}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">{Answear[2]}
                    <input type="radio" name={Name} value={PointsAdder[2]}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">{Answear[3]}
                    <input type="radio" name={Name} value={PointsAdder[3]}/>
                    <span className="checkmark"></span>
                </label>
                
            </div>
        </div> 
    )
}


