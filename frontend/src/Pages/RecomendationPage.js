import React from 'react';
import "../styles/Recomendations/PageStyle.css";
import "../styles/Recomendations/Questions/Question.css"
import  Questions  from '../Components/Recomendation/Questions';
import Results from '../Components/Recomendation/Results';
import {useState} from 'react';

function RecomendationPage() {

    // eslint-disable-next-line
    const [AppGeneral, setAppGeneral] = useState({  Categories: [], 
                                                    Archetype: [],
                                                    QuestionsInstance:true});


    const handleCategoriesData = (data) => {
        setAppGeneral(data);
        console.log(data);
      };

return (
    <div className = "main-content">
    
        <div className="Header-one">
                <div className="rounded-box">
                    <h1>The FGC Recommender</h1>
                </div>
        </div>

        <div className="Content">
                {/* Intregate the Image Container */}
                {AppGeneral.QuestionsInstance && <Questions handlerpasco={handleCategoriesData}/>}
                {!AppGeneral.QuestionsInstance && <Results gameslist={AppGeneral.Categories} archetypeslist={AppGeneral.Archetype}/>}
                     
        </div>

        <div className = "Footer-one">
            <button className="button" style={{ backgroundColor: 'rgba(0, 136, 145, 0.5)' }} onClick={() => window.open('https://github.com/PeDro0210')}>GitHub</button> {/*LMAO, I reused the button style cause I'm lazy asf*/}
            <span style={{ marginRight: '5vw' }}></span> {/*Space Between buttons*/}
            <button className="button" style={{ backgroundColor: 'rgba(0, 136, 145, 0.5)' }} onClick={() => window.open('https://paypal.me/pedroruben021?country.x=GT&locale.x=en_US')}>PayPal</button>
        </div>
    
    </div>
)
}

export default RecomendationPage;