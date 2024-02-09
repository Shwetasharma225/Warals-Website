import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Products from './Products';
import CustomNavbar from './Navbar';


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="contained" >
        <CustomNavbar />
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item >
            <div className="carousel-item-wrapper" style={{ width: "100%" }}>
              <img
                className="d-block slide-in-image"
                src={require('../components/assets/slider-13.png')}
                alt="First slide"
                style={{marginTop:'11%'}}
              />
              <Carousel.Caption className="carousel-caption fadeInUp">
                <h3 style={{fontWeight:'bolder', fontSize:'45px'}}>Fuel For Your Soul</h3>
                <p style={{fontSize:'20px'}}>Designed to automate, simplify and streamline all the administrative tasks!</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-wrapper" >
              <img
                className="d-block slide-in-image"
                src={require('../components/assets/output-onlinepngtools-21.png')}
                alt="Second slide"
                style={{marginTop:'11%'}}
              />
              <Carousel.Caption className="carousel-caption fadeInUp">
                <h3 style={{fontWeight:'bolder', fontSize:'45px'}}>Work like you own it!</h3>
                <p style={{fontSize:'20px'}}>Top of the line customizable cloud-based and integrated educational ERP system</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-wrapper" style={{ width: "100%" }}>
              <img
                className="d-block slide-in-image"
                src={require('../components/assets/slider-35.png')}
                alt="Third slide"
                style={{marginTop:'11%'}}
              />
              <Carousel.Caption className="carousel-caption fadeInUp">
                <h3 style={{fontWeight:'bolder', fontSize:'45px'}}>Manage everything fluently! </h3>
                <p style={{fontSize:'20px'}}>Manage students, faculties, courses, classes, and many more tasks with a simple software.</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
        <Products />
      </div>
    </>
  );
}

export default Home;
