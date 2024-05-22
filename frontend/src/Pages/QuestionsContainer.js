import "../styles/Questions/QuestionContainer.css";
import { QuestionBox } from '../Components/QuestionBox';
import { useEffect, useState} from 'react';



export default function Questions({handlerpasco}) {   //inside joke  
    // JSON object that will contain the categories and the points that it gives to that category
    let QuestionCategories = {
        "Categories":["2D","3D","TagTeam","AirDashers","Anime","WeaponBased","Fast-paced","Footsies","SlowPaced","Installbased","CrossOver"],   
        "Points":[0,0,0,0,0,0,0,0,0,0,0]
    }
    let QuestionArchetype = {
        "Categories":[],
        "Points":[]
    }

    // Fuck UseStates
    let Categories = [];

    let Archetypes = [];
    

    const [QuestionList, setQuestionList]  = useState([]);



    // Fetching the data
    useEffect(() => {
        fetch(`http://127.0.0.1:8080/GetQuestions`)
        .then(response => response.json())
        .then(data => {
          setQuestionList(data)
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

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
            }
            if (QuestionArchetype["Categories"].includes(Categories[i])){
                console.log(Categories[i])
                let indx = QuestionArchetype["Categories"].indexOf(Categories[i])
                console.log(indx)
                QuestionArchetype["Points"][indx] = QuestionArchetype["Points"][indx] + 1;
            }
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
        Categories = top3cat();
        Archetypes = top3arc();
        handlerpasco({Categories:Categories,Archetype:Archetypes});
        
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

    let count = 0;

    return (
        
        <div>
            {QuestionList.map((Question) => {
                count = count + 1;
                return (
                    <div className='Questions-box'>
                        <h1><QuestionBox Answear={Question.answears} PointsAdder={Question.points} Question={Question.question} Number={count} /></h1>
                    </div>
                )
            })}
        

            <button type="button" class="button" onClick={() => getAnswears()}>
                Submit
            </button>

        </div>
      
    )
}

