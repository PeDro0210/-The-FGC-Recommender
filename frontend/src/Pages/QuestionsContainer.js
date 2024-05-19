import React from 'react';
import "../styles/Questions/QuestionContainer.css";
import "../Components/QuestionBox"

export function Questions() {    
    // JSON object that will contain the categories and the points that it gives to that category
    let QuestionCategories = {
        "Categories":["2D","3D","TagTeam","AirDashers","Anime","WeaponBased","Fast-paced","Footsies","SlowPaced","Installbased","CrossOver"],   
        "Points":[0,0,0,0,0,0,0,0,0,0,0]
    }
    let QuestionArchetype = {}

    /**
    * Function that adds the points to the category that the question corresponds to or removes the points if the the question is de-selected
    * @param (Category) - String that contains the category that the question corresponds to
    * @param (Points) - Integer that contains the points that the question corresponds to
    */
    // Will recieve a list

    // TODO: Apply the function in to the JSX :D
    const PointAdder = (Categories) => { 
        for (let i = 0; i < Categories.length; i++) {
            if (Categories[i] in QuestionCategories){
                QuestionCategories["Points"][QuestionCategories["Categories"].indexOf(Categories[i])] = QuestionCategories["Points"][QuestionCategories["Categories"].indexOf(Categories[i])] + 1;
            }
            if (Categories[i] in QuestionArchetype){
                QuestionCategories["Points"][QuestionCategories["Categories"].indexOf(Categories[i])] = QuestionCategories["Points"][QuestionCategories["Categories"].indexOf(Categories[i])] + 1;
            }
        }
    }

    // TODO: Call the QuestionFetcher function to get the questions and make the QuestionBox component to show the questions.
    // TODO: make a submit button that will return all the QuestionCategories once all questions are answered to the ResultReciever, to be send to the react backend
    
    return (
        

        <div className='Questions-box'>
            <h1>WIP</h1>
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
            
            */
            
            }
            
        </div>
        
    )
}

