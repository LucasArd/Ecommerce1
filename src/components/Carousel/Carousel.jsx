import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import useFirestore from '../../utils/useFireStore';

const nameCollection = "items";
const CarouselIndex = () => {

  const [data] = useFirestore({nameCollection});
  
  const DataImgsFilter = (prop) =>{
    const dataImgs = data.length !== 0 ? data[prop] : [];
    console.log(dataImgs.image);
    return "image" in dataImgs ? dataImgs.image : [];
  }
  
  console.log(data);
  return (
    <Carousel fade className="Carousel-ItemContainer" variant="dark">
      <Carousel.Item className="Carousel-Item" >
        <img 
          
          className="d-block w-100 Carousel-Container"
          src={DataImgsFilter(13)}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Black and White</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="Carousel-Item" >
        <img
          className="d-block w-100 Carousel-Container"
          src={DataImgsFilter(12)}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Colors</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="Carousel-Item" >
        <img
          className="d-block w-100 Carousel-Container"
          src={DataImgsFilter(11)}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Oil Paint</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselIndex;