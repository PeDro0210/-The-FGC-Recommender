import React from 'react';
import "../styles/Questions/QuestionContainer.css";
import { QuestionBox } from '../Components/QuestionBox';
import { useEffect, useState} from 'react';




export function Questions({handlerpasco}) {   //inside joke  
    // JSON object that will contain the categories and the points that it gives to that category
    let QuestionCategories = {
        "Categories":["2D","3D","TagTeam","AirDashers","Anime","WeaponBased","Fast-paced","Footsies","SlowPaced","Installbased","CrossOver"],   
        "Points":[0,0,0,0,0,0,0,0,0,0,0]
    }
    let QuestionArchetype = {}

    let [Categories, setCategories] = useState([]);

    let [Archetypes, setArchetypes] = useState([]);
    

    useEffect(() => {
        handlerpasco({ Categories, Archetypes });
      }, [Categories, Archetypes, handlerpasco]);

    const QuestionList1 =  [
        
            {
                "question":"Que clase de movimientos te gustan mas en un juego de pelea?",
                "answears":["En el aire principalmente",
                            "En el suelo un poco mas pausado, centrado en el 'neutral' y el 'footsies'",
                            "En un entorno el cual me pueda mover bastante tridiemensionalmente",
                            "Rapido, donde no haya tanto tiempo para pensar y mas para reaccionar",
                            ],
                "points":[["CrossOver","2D","Anime","Fast-paced"],
                ["2D","3D","Footsies","SlowPaced"],
                ["3D","Footsies"],
                ["CrossOver","2D","Anime","Fast-paced", "AirDashers"]]
            },
    
            {
                "question":"Que clase de acercamiento en general de combate te gusta mas?",
                "answears":[
                        "Yo y mi oponente en el suelo, ver quien da el primer paso y quien se equivoca",
                        "Hacer esos combos largos, vistosos con sus finishers espectaculares",
                        "Que sea un poco mas pausado, donde pueda pensar un poco mas en mis movimientos",
                        "Ver esos momentos donde tenga la oportunidad de pegar y que mi oponente no pueda hacer nada"
                ],
                "points":[["2D","3D","Footsies","SlowPaced","WeaponBased"],
                ["2D","Anime","Fast-paced","AirDashers"],
                ["3D","Footsies","WeaponBased"],
                ["2D","WeaponBased"]]
            }
    
    ]




    /**
    * Function that adds the points to the category that the question corresponds to or removes the points if the the question is de-selected
    * @param (Category) - String that contains the category that the question corresponds to
    * @param (Points) - Integer that contains the points that the question corresponds to
    */
    // Will recieve a list

    // TODO: Apply the function in to the JSX :D (Ya funciona :D )
    const PointAdder = (Categories) => { 
        for (let i = 0; i < Categories.length; i++) {
            if (QuestionCategories["Categories"].includes(Categories[i])) {
                let indx = QuestionCategories["Categories"].indexOf(Categories[i])
                QuestionCategories["Points"][indx] = QuestionCategories["Points"][indx] + 1;
            }/*
            if (QuestionArchetype["Categories"].includes(Categories[i])){
                console.log(Categories[i])
                let indx = QuestionArchetype["Categories"].indexOf(Categories[i])
                console.log(indx)
                QuestionArchetype["Points"][indx] = QuestionArchetype["Points"][indx] + 1;
            }
            */
        }
    }
    
    function getAnswears(){
        const answears1 = []
        for (let i = 1; i < 3; i++) {
            const Name = "radio" + i
            var ele = document.getElementsByName(Name);
            for (var j = 0; j < ele.length; j++) {
                if (ele[j].checked) {
                    const answ = ele[j].value.split(",")
                    for (let k = 0; k < answ.length; k++) {
                        answears1.push(answ[k])
                    }
                }
            }
        }
        
        PointAdder(answears1);
        console.log(QuestionCategories["Points"])
        
        setCategories(top3cat());
        //setArchetypes(top3arc());
        //console.log(Archetypes)
        console.log(top3cat())
        
    }

    

    function top3cat(){
        //find the top 3 categories
        let top3 = []
        let top3indx = []
        for (let i = 0; i < 3; i++) {
            let max = 0;
            let indx = 0;
            for (let j = 0; j < QuestionCategories["Points"].length; j++) {
                if (QuestionCategories["Points"][j] > max && !top3indx.includes(j)) {
                    max = QuestionCategories["Points"][j];
                    indx = j;
                }
            }
            top3.push(QuestionCategories["Categories"][indx])
            top3indx.push(indx)
        }
        return top3
    }

    function top3arc(){
        //find the top 3 archetypes
        let top3 = []
        let top3indx = []
        for (let i = 0; i < 3; i++) {
            let max = 0;
            let indx = 0;
            for (let j = 0; j < QuestionArchetype["Points"].length; j++) {
                if (QuestionArchetype["Points"][j] > max && !top3indx.includes(j)) {
                    max = QuestionArchetype["Points"][j];
                    indx = j;
                }
            }
            top3.push(QuestionArchetype["Categories"][indx])
            top3indx.push(indx)
        }
        return top3
    }

    

    

    // TODO: Call the QuestionFetcher function to get the questions and make the QuestionBox component to show the questions.
    // TODO: make a submit button that will return all the QuestionCategories once all questions are answered to the ResultReciever, to be send to the react backend
    // TODO: Odio mi vida
    let count = 0;

    

    return (
        
        <div>
        <div>
            
            {/*
            {QuestionList.map((Question) => {
                count = count + 1;
                return (
                    
                    // <h1><QuestionBox Answear={Question.Answears} PointsAdder={Question.Points} Question={Question.Question} Number={count} /></h1>
                    <h1>{Question.Answears}</h1>
                )
            })}
            */}

            {QuestionList1.map((Question) => {
                count = count + 1;
                return (
                    <div className='Questions-box'>
                        <h1><QuestionBox Answear={Question.answears} PointsAdder={Question.points} Question={Question.question} Number={count} /></h1>
                        <h2></h2>
                    </div>
                )
            })}



            
            
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
        
        <div className='Questions-box'>
            <button type="button" class="button" onClick={() => getAnswears()}>
                Submit
            </button>
        </div>
        <div id="result"></div>
        </div>
    
        
        
        
    )
}

