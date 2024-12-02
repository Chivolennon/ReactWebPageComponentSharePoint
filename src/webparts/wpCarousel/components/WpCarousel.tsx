import * as React from "react"; // importa react, necesario pra crear componentes.
import { IWpCarouselProps } from "./IWpCarouselProps"; // Importa propiedades específicas del componente
import Carousel from "react-multi-carousel"; // importa componentes de carousel
import "react-multi-carousel/lib/styles.css"; // Importa los estilos default de la librería para el carrusel. 
require("../assets/Css/style.css");

// Determina cuantos elementos son integrados al carrusel.
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 }, // Aplica el tamaño de la pantalla en la que se utiliza
    items: 1,
    slidesToSlide: 1 // Objetos que se muestran en la tabla
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const WpCarousel: React.FC<IWpCarouselProps> = (WpBienvenido) => { // FC = Componente Funcional. 

  return (
  <div>
    <Carousel
          className="conCarousel"
          swipeable={false} // Para confirmar si es deslizable o no con el dedo. 
          draggable={false} // Para arrastrar el carrusel con el mouse.
          showDots={true} // Muestra puntos de navegación 
          responsive={responsive} // Responsive xd. 
          ssr={true} // Renderiza el carrusel en el lado del servidor. 
          infinite={true} // El carrusel es infinito
          autoPlay={true} // El carrusel se reproduce continuamente.
          autoPlaySpeed={2000} // Velocidad de reproducción
          keyBoardControl={true} // Permite controlarlo con el mouse. 
          customTransition="all .5" // Transición personalizada
          transitionDuration={2000} // Duración de transición
          containerClass="carousel-container" // Clase Css para el contenedor del carrusel
          removeArrowOnDeviceType={["tablet", "mobile"]} // Oculta las flechas.
          dotListClass="custom-dot-list-style" // Clase Css para la lsita de punto de navegación.
          itemClass="carousel-item-padding-40-px" // Clase Css para los elemntos del carrusel. 
          >
          <div>
            <img 
              style={{width:"80px", height:"80px"}}
              src={require('../assets/Colbun_only_logo.png')}
              />
          </div>
          <div>
            <img 
              style={{width:"80px", height:"80px"}}
              src={require('../assets/1.png')}
              />
          </div>
          <div>
            <img 
              style={{width:"80px", height:"80px"}}
              src={require('../assets/2.png')}
              />
          </div>
          <div>
            <img 
              style={{width:"80px", height:"80px"}}
              src={require('../assets/3.png')}
              />
          </div>
          <div>
            <img 
              style={{width:"80px", height:"80px"}}
              src={require('../assets/4.png')}
              />
          </div>
        </Carousel>
        <div className="referenceDiv">
          <div>
            <ul className="ulPart">
              <li><a href="https://hcm19.sapsf.com/login?company=colbun">Plataforma GO</a></li>
              <li><a href="https://colbun.sharepoint.com/sites/PortaldeAbastecimiento?xsdata=MDN8MDF8fDlkZWU2M2FhODcyYjQ0ZjQ4ZGUzMzg2MzAwMmQ0NzgwfGY0MDJjODJkYjFhMzQ5ODNhMmNjZDQ5MGJiODk4Y2I2fDF8MHw2Mzc4MDUyMjYxNjEyMjQzNDl8R29vZHxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT0%3D&sdata=MHMrNFVuRHdBUnZTZC84OGs3QTlwRUExUndjQUh2SU5XM3lJYmJoOWhzRT0%3D&ovuser=f402c82d-b1a3-4983-a2cc-d490bb898cb6%2Csbarahona%40colbun.cl&OR=Teams-HL&CT=1645104993156&sourceId=&params=%7B%22AppName%22%3A%22Teams-Desktop%22%2C%22AppVersion%22%3A%2227%2F22010300409%22%7D">Abastecimiento(Liberaciones FIORI)</a></li>
              <li><a href="https://otds.colbunsa.cl:8443/otdsws/login?RFA=eyJhbGciOiJub25lIn0.eyJwb3N0VGlja2V0Ijp0cnVlLCJwb3N0UGFyYW1zIjp0cnVlLCJsb2dvblN0eWxlIjoic2lnbmluLWNzIiwidXhWZXJzaW9uIjoxLCJmb3J3YXJkQWRkcmVzcyI6Imh0dHBzOi8vbGl2ZWxpbmsuY29sYnVuc2EuY2wvbGl2ZWxpbmsvbGl2ZWxpbmsuZXhlP2Z1bmM9b3Rkc2ludGVncmF0aW9uLnJlZGlyZWN0Jk5leHRVUkw9aHR0cHMlM0ElMkYlMkZsaXZlbGluayUyRWNvbGJ1bnNhJTJFY2wlMkZsaXZlbGluayUyRmxpdmVsaW5rJTJFZXhlIiwicmVzb3VyY2VJRCI6IjE5NzZmZGIyLWNkYjUtNDU5Mi04ODNhLTJjMDY1MTQxNDQyOSJ9&fragment=">LIVELINK</a></li>
              <li><a href="https://colbun.sharepoint.com/sites/Intranet/Paginas/Service-Now.aspx">SERVICENOW</a></li>
            </ul>
          </div>
        </div>
    </div>
  );
};
export default WpCarousel;
