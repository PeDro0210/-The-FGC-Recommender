import React from 'react';
import "../styles/Questions/QuestionContainer.css";
import { QuestionBox } from '../Components/QuestionBox';

export function Questions() {    
    // JSON object that will contain the categories and the points that it gives to that category
    let QuestionCategories = {
        "Categories":["2D","3D","TagTeam","AirDashers","Anime","WeaponBased","Fast-paced","Footsies","SlowPaced","Installbased","CrossOver"],   
        "Points":[0,0,0,0,0,0,0,0,0,0,0]
    }
    let QuestionArchetype = {}

    /*const[QuestionList, setQuestionList] = useState([
        Question: "Place Holder?",
        Answears: [ans1, ans2, ans3, ans4],
        Points: [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]]
    ])
    */

    /*{"Questions":[
    {"answears":[
    {"answear":"En el aire principalmente",
    "points":["CrossOver","2D","Anime","Fast-paced","AirDashers"]},
    {"answear":"En el suelo un poco mas pausado, centrado en el 'neutral' y el 'footsies'",
    "points":["2D","3D","Footsies","SlowPaced"]},
    {"answear":"En un entorno el cual me pueda mover bastante tridiemensionalmente",
    "points":["3D","Footsies"]},
    {"answear":"Rapido, donde no haya tanto tiempo para pensar y mas para reaccionar",
    "points":["CrossOver","2D","Anime","Fast-paced"]}
    ],
    "question":"Que clase de movimientos te gustan mas en un juego de pelea?"},

    {"answears":[
    {"answear":"Yo y mi oponente en el suelo, ver quien da el primer paso y quien se equivoca",
    "points":["2D","3D","Footsies","SlowPaced","WeaponBased"]},
    {"answear":"Hacer esos combos largos, vistosos con sus finishers espectaculares",
    "points":["2D","Anime","Fast-paced","AirDashers"]},
    {"answear":"Que sea un poco mas pausado, donde pueda pensar un poco mas en mis movimientos",
    "points":["3D","Footsies","WeaponBased"]},
    {"answear":"Ver esos momentos donde tenga la oportunidad de pegar y que mi oponente no pueda hacer nada",
    "points":["2D","WeaponBased"]}
    ],
    "question":"Que clase de acercamiento en general de combate te gusta mas?"}
    
    ]} */

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
    
    const answer = ['ph1','ph2','ph3','ph4'];
    const points = 2;

    return (
        
        <div>
        <div className='Questions-box'>
            <h1><QuestionBox Answear={answer} PointsAdder={points} Question='placeholder?' Number={1} /></h1>
            
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
        <h2></h2>
        <div className='Questions-box'>
            <h1><QuestionBox Answear={answer} PointsAdder={points} Question='1?' Number={2} /></h1>
        </div>
        </div>
    
        
        
        
    )
}

