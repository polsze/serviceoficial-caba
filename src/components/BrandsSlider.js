import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Logos from '../images/logos.webp'
import Logos1 from '../images/logos1.webp'
import Logos2 from '../images/logos2.webp'
import Logos3 from '../images/logos3.webp'
import Logos4 from '../images/logos4.webp'
import Logos5 from '../images/logos5.webp'
import Logos6 from '../images/logos6.webp'



function BrandsSlider() {

  const Imagenes = [Logos, Logos1, Logos2, Logos3, Logos4, Logos5, Logos6];

  return (
    <Carousel prevIcon={null} nextIcon={null} indicators={false}>
      {Imagenes.map((imagen, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={imagen}
            alt={`Marca ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default BrandsSlider;