
import React from 'react';
import "../styles/Questions/SelectionBox.css";
import "../styles/Questions/Question.css";


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

    return (
        <div>
            <div className="Question">
                <h1>{Number}. {Question}</h1>
                <hr/>
            </div>
        
            <div className="SelectionBox">
                <label className="container">{Answear[0]}
                    <input type="radio" name={Name} value={Answear[0]}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">{Answear[1]}
                    <input type="radio" name={Name} value={Answear[1]}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">{Answear[2]}
                    <input type="radio" name={Name} value={Answear[2]}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">{Answear[3]}
                    <input type="radio" name={Name} value={Answear[3]}/>
                    <span className="checkmark"></span>
                </label>
                <button type="button" onClick={() => displayRadioValue({Name1: Name})}>
                    Submit
                </button>
                
                <div id="result"></div>
            </div>
        </div> 
    )
}

function displayRadioValue(Name) {
    var ele = document.getElementsByName(Name.Name1);
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.getElementById("result").innerHTML = "Answer: " + ele[i].value;
        }
    }
}
