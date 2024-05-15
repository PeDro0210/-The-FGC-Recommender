import React from 'react';
import "../src/styles/app.css";
import { Questions } from './Pages/QuestionsContainer';

function App() {

  return (
      <div className = "main-content">
      
      <div className="Header-one">
            <div className="rounded-box">
                <h1>The FGC Recommender</h1>
            </div>
          {/*
          Possible structure
          // Color of the header: Dark gray
          // Color of the logo: burgundy
          // 
___________.__             ____________________________          __________                                                       .___            
\__    ___/|  |__   ____   \_   _____/  _____/\_   ___ \         \______   \ ____   ____  ____   _____   _____   ____   ____    __| _/___________   |
|    |   |  |  \_/ __ \   |    __)/   \  ___/    \  \/   ______ |       _// __ \_/ ___\/  _ \ /     \ /     \_/ __ \ /    \  / __ |/ __ \_  __ \    |
|    |   |   Y  \  ___/   |     \ \    \_\  \     \____ /_____/ |    |   \  ___/\  \__(  <_> )  Y Y  \  Y Y  \  ___/|   |  \/ /_/ \  ___/|  | \/    | <- this ascii logo is a place holder
|____|   |___|  /\___  >  \___  /  \______  /\______  /         |____|_  /\___  >\___  >____/|__|_|  /__|_|  /\___  >___|  /\____ |\___  >__|       |   
              \/     \/       \/          \/        \/                 \/     \/     \/            \/      \/     \/     \/      \/    \/           |
                                    |-----------------------------------------------------------|<-here ends the header                             |
                                    |                                                           |                                                   | <- limit of the page
                                    |                                                           | 
                                    |                                                           | 
                                    |                                                           |
                                    |                                                           |<- and here goes the content
                                    |                                                           |
                                    |                                                           |
                                    |                                                           |
                                    |                                                           |
                                    |                                                           | <- and keeps going until the footer           
          */}
      </div>

      <div className="Content">
          <Questions/>{/*This is how you instanciate a component*/} 
          
          {/* 
          // Color of the content: Dark gray
          
          this can be or the Question side or the result one

          */}
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