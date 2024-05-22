import React from 'react';
import "../src/styles/app.css";
import  Questions  from './Pages/QuestionsContainer';
import ResultsContainer from './Pages/ResultsContainer';
import {useState} from 'react';

function App() {


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
                {!AppGeneral.QuestionsInstance && <ResultsContainer gameslist={AppGeneral.Categories} archetypeslist={AppGeneral.Archetype}/>}
                       
        </div>

        <div className = "Footer-one">
            <h1>WIP, there will be cool things in here</h1>
            {/* 
                                        |-----------------------------------------------------------|<-here starts de footer
                                        Maybe the README file and a donation button (no se preocupen de ese lado, yo de eso me encargare en el futuro)

            */}
        </div>
      
      </div>
  )
}

export default App;