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
  return (

    <Carousel prevIcon={null} nextIcon={null} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logos}
          alt="Marcas de heladeras"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logos1}
          alt="Marcas de heladeras"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logos2}
          alt="Marcas de heladeras"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logos3}
          alt="Marcas de heladeras"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logos4}
          alt="Marcas de heladeras"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logos5}
          alt="Marcas de heladeras"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Logos6}
          alt="Marcas de heladeras"
        />

      </Carousel.Item>
    </Carousel>

  );
}

export default BrandsSlider;