import * as React from "react"; // importa react, necesario pra crear componentes.
import { IWpCarouselProps } from "./IWpCarouselProps"; // Importa propiedades específicas del componente
import Carousel from "react-multi-carousel"; // importa componentes de carousel
import "react-multi-carousel/lib/styles.css"; // Importa los estilos default de la librería para el carrusel. 
require("/Users/ep_ssanchez/Dev_Colbun/src/webparts/wpBienvenido/assets/Css/style.css");

// Determina cuantos elementos son integrados al carrusel.
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 }, // Aplica el tamaño de la pantalla en la que se utiliza
    items: 2,
    slidesToSlide: 2 // Objetos que se muestran en la tabla
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const WpCarousel: React.FC<IWpCarouselProps> = (WpBienvenido) => { // FC = Componente Funcional. 

  return (
    <Carousel
      swipeable={false} // Para confirmar si es deslizable o no con el dedo. 
      draggable={false} // Para arrastrar el carrusel con el mouse.
      showDots={true} // Muestra puntos de navegación 
      responsive={responsive} // Responsive xd. 
      ssr={true} // Renderiza el carrusel en el lado del servidor. 
      infinite={true} // El carrusel es infinito
      autoPlay={true} // El carrusel se reproduce continuamente.
      autoPlaySpeed={5000} // Velocidad de reproducción
      keyBoardControl={true} // Permite controlarlo con el mouse. 
      customTransition="all .5" // Transición personalizada
      transitionDuration={500} // Duración de transición
      containerClass="carousel-container" // Clase Css para el contenedor del carrusel
      removeArrowOnDeviceType={["tablet", "mobile"]} // Oculta las flechas.
      dotListClass="custom-dot-list-style" // Clase Css para la lsita de punto de navegación.
      itemClass="carousel-item-padding-40-px" // Clase Css para los elemntos del carrusel. 
      >


      <div>Item 1 <br /></div>
      <div>Item 2 <br /></div>
      <div>Item 3 <br /></div>
      <div>Item 4 <br /></div>
    </Carousel>
  );
};


export default WpCarousel;
