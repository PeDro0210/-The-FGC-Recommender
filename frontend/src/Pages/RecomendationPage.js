import React from 'react';
import "../styles/Recomendations/PageStyle.css";
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
            {/* 
                                        |-----------------------------------------------------------|<-here starts de footer
                                        Maybe the README file and a donation button (no se preocupen de ese lado, yo de eso me encargare en el futuro)

            */}
        </div>
      
      </div>
  )
}

export default RecomendationPage;