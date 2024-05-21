import React from 'react';
import "../src/styles/app.css";
import { Questions } from './Pages/QuestionsContainer';
import {useState} from 'react';

function App() {

    //your mom

    //set useStates

    // eslint-disable-next-line
    const [Categories, setCategories] = useState({ Categories: [], Archetype: []});


    const handleCategoriesData = (data) => {
        setCategories(data);
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
            <Questions handlerpasco={handleCategoriesData}/>{/*This is how you instanciate a component*/} 
            
        </div>

        <div className = "Footer-one">
            <h1>idunno what to add here RN NGL</h1>
            {/* 
                                        |-----------------------------------------------------------|<-here starts de footer
                                        Maybe the README file and a donation button (no se preocupen de ese lado, yo de eso me encargare en el futuro)

            */}
        </div>
      
      </div>
  )
}

export default App;