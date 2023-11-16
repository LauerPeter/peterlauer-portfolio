

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

export default function ParticleCom() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <div style={{ pointerEvents: 'none'}} >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          "fullScreen": {
            "enable": true,
          },
          "particles": {
            "number": {
              "value": 14,
              "density": {
                "enable": true
              }
            },
            "color": {
              "value": "#fff"
            },
            "shape": {
              "type": "circle" 
            },
            "opacity": {
              "value": 0.6
            },
            "size": {
              "value": 2
            },
            "line_linked": {
              "enable": true,
              "distance": 1200,
              "color": "#708090",
              "opacity": 0.4,
              "width": 4
            },
            "move": {
              "enable": true,
              "speed": 2
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              }
            },
            "modes": {
              "grab": {
                "distance": 550,
                "line_linked": {
                  "opacity": 1
                }
              }
            }
          },
          "retina_detect": true,
          "background": {
            "color": "#FFFFF0",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          }
        }}
      />
    </div>
  );
}