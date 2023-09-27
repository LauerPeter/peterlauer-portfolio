

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

export default function ParticleCom() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          "fullScreen": {
            "enable": true,
          },
          "particles": {
            "number": {
              "value": 12,
              "density": {
                "enable": false
              }
            },
            "color": {
              "value": "#fff"
            },
            "shape": {
              "type": "circle" 
            },
            "opacity": {
              "value": 0.8
            },
            "size": {
              "value": 4
            },
            "line_linked": {
              "enable": true,
              "distance": 600,
              "color": "#708090",
              "opacity": 0.4,
              "width": 3
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