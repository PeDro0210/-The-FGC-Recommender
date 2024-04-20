


export function QuestionsPage() {

    return (
        <>
        
        <div className="Header">
            {/*
            Possible structure
            // Color of the header: light gray
            // Color of the logo: burgundy
            // 
___________.__             ____________________________          __________                                                       .___            
\__    ___/|  |__   ____   \_   _____/  _____/\_   ___ \         \______   \ ____   ____  ____   _____   _____   ____   ____    __| _/___________   |
  |    |   |  |  \_/ __ \   |    __)/   \  ___/    \  \/   ______ |       _// __ \_/ ___\/  _ \ /     \ /     \_/ __ \ /    \  / __ |/ __ \_  __ \  |
  |    |   |   Y  \  ___/   |     \ \    \_\  \     \____ /_____/ |    |   \  ___/\  \__(  <_> )  Y Y  \  Y Y  \  ___/|   |  \/ /_/ \  ___/|  | \/  | <- this ascii logo is a place holder
  |____|   |___|  /\___  >  \___  /  \______  /\______  /         |____|_  /\___  >\___  >____/|__|_|  /__|_|  /\___  >___|  /\____ |\___  >__|     |   
                \/     \/       \/          \/        \/                 \/     \/     \/            \/      \/     \/     \/      \/    \/         |
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
            {/* 
                                    |-----------------------------------------------------------|<-here ends the header                                     
                                    |                                                           | 
                                    |                                                           |
                                    |(QuestionComponents                                        |
                                    |   Question                                                |      
                                    | SelectonBox   (answear)                                   | <- and the components will have there own dimensions
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
            
            */}
        </div>

        <div className = "Footer">
            {/* 
                                    |-----------------------------------------------------------|<-here startds de footer
                                    Maybe the README file and a donation button (no se preocupen de ese lado, yo de eso me encargare en el futuro)

            */}
        </div>
        
        </>
    )
}

