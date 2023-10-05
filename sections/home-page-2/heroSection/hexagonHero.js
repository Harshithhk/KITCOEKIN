import React from 'react';
import { useEffect, useState } from 'react';

function HexagonHero(props) {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener('mousemove', onMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', onMouseMove);
      };
    }, []);

    
    return (
        <div>
            <style>{`
             .hexagon{background:url(images/hexagon.svg);background-repeat:no-repeat;background-attachment:fixed;background-position:50%;background-size:400vh;height:130%;z-index:2}

             .hexBackground,.hexagon{position:absolute;width:100%}
             
             .hexBackground{height:100%;filter:blur(100px)}
             
             .hexBackground2{top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);background:linear-gradient(90deg,#335bf4,#2ae9c9);z-index:0}
             .hexBackground{border-radius:50%;background:linear-gradient(90deg,#335bf4,#2ae9c9);z-index:0}

             .hexBackground2{position:absolute;height:300px;width:300px;filter:blur(20px)}
             @keyframes fadeInThenOut {
              0% {
                opacity: 0;
                transform: scale(0);
              }
              40% {
                opacity: 1;
                transform: scale(1);
              }
              100% {
                opacity: 0;
                 transform: scale(1);
              }
            }
            
            .animate-fade-in-out {
              animation: fadeInThenOut 3s ease-in-out;
              opacity: 0;
            }
             `}</style>
             <div className="hexagon "></div>
             <div className="hexBackground animate-fade-in-out" ></div>
             <div className='hexBackground2'
             style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
             ></div> 
        </div>
    );
}

export default HexagonHero;