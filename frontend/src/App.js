import React from 'react';
import "../src/styles/app.css";
import { ImageBox } from '../src/Components/ImageBox'; // Asegúrate de que la ruta es correcta
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App({ imageList }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(imageList.length, 3), // Mostrar hasta 3 imágenes o menos si hay menos imágenes
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(imageList.length, 2),
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="main-content">
            <div className="Header-one">
                <div className="rounded-box">
                    <h1>The FGC Recommender</h1>
                </div>
                {/*
                Possible structure
                // Color of the header: Dark gray
                // Color of the logo: burgundy
                // 
    __________.__             ____________________________          __________                                                       .___            
    \__    ___/|  |__   ____   \_   _____/  _____/\_   ___ \         \______   \ ____   ____  ____   _____   _____   ____   ____    __| _/___________   |
    |    |   |  |  \_/ __ \   |    __)/   \  ___/    \  \/   ______ |       _// __ \_/ ___\/  _ \ /     \ /     \_/ __ \ /    \  / __ |/ __ \_  __ \    |
    |    |   |   Y  \  ___/   |     \ \    \_\  \     \____ /_____/ |    |   \  ___/\  \__(  <_> )  Y Y  \  Y Y  \  ___/|   |  \/ /_/ \  ___/|  | \/    | <- this ascii logo is a place holder
    |____|   |___|  /\___  >  \___  /  \______  /\______  /         |____|_  /\___  >\___  >____/|__|_|  /__|_|  /\___  >___|  /\____ |\___  >__|       |   
                  \/     \/       \/          \/        \/                 \/     \/     \/            \/      \/     \/      \/    \/           |
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
                <Slider {...settings}>
                    {imageList.map((imgObj, index) => (
                        <div key={index}>
                            <ImageBox
                                image={imgObj.image_url}
                                NumberOfImage={index + 1}
                                Name={imgObj.name}
                                Size={'100%'}
                            />
                        </div>
                    ))}
                </Slider>
                <h1>WIP</h1>
                {/*
                // Color of the content: Dark gray
                
                this can be or the Question side or the result one

                */}
            </div>

            <div className="Footer-one">
                <h1>idunno what to add here RN NGL</h1>
                {/*
                                        |-----------------------------------------------------------|<-here starts de footer
                                        Maybe the README file and a donation button (no se preocupen de ese lado, yo de eso me encargare en el futuro)

                */}
            </div>
        </div>
    );
}

export default App;
