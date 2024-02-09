import React, { useEffect, useState } from 'react';
import { LocationOn, PhoneOutlined } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Email } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import { useSpring, animated } from 'react-spring';
import { Carousel } from 'react-bootstrap';
import VerticalCircularBand from './VerticalCircularBand';
import { useLoadScript } from '@react-google-maps/api';
import { GoogleMap } from '@react-google-maps/api';


const Products = () => {

  const [index, setIndex] = useState(0);
  const [review, setReview] = useState([])
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const youtubeLinks = [
    'https://www.youtube.com/embed/H8QevkU2v90?si=VYEquIHW0-_DW3cd',
    'https://www.youtube.com/embed/H8QevkU2v90?si=VYEquIHW0-_DW3cd',
    'https://www.youtube.com/embed/H8QevkU2v90?si=VYEquIHW0-_DW3cd',
    'https://www.youtube.com/embed/H8QevkU2v90?si=VYEquIHW0-_DW3cd',
  ];
  // const customerFeedback = review?.data?.map((item) => item.attributes.feedback) || [];

  useEffect(() => {

    const fetchReview = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/reviews', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer cb7e7616eb67cea2c307d3a777059b9b3dd39072d010094c285f8e12a459e0b670587b6e6d69ad8a4948b1a9fe99b4d314ff3951b6df4663cba6efdb9e86b46e76b6e85d0b6080432fab37a9b44de2446915c95683b02311ec41dadd6b272e7543c5f6935803f76eade33b5e4c67910bd48b4d61a21ee74272ca2a05bc02786e',
            'content-type': 'application/json'
          }

        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const Reviewdata = await response.json();
        setReview(Reviewdata);
        console.log(Reviewdata);

      }

      catch (error) {
        console.error('error fetching data:', error);

      }

    };
    fetchReview();
  }, []);



  const contactInfo = {
    address: '123 Main Street, City, Country',
    phone: '+1 (123) 456-7890',
    email: 'info@example.com',
  };
  const avatarStyle = { backgroundColor: "#0c1a21" };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  const dummyReviews = [
    { id: 1, name: 'John Doe', feedback: 'Great product! Highly recommended.' },
    { id: 2, name: 'Jane Smith', feedback: 'Excellent customer service.' },
    { id: 3, name: 'Priya Kulkarni', feedback: 'satisfied service.' },
    { id: 4, name: 'Somya seth', feedback: 'Excellent customer service.' },
    { id: 5, name: 'himansh', feedback: 'Excellent customer service.' },
    // Add more dummy reviews as needed
  ];

  const reviewSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });


  return (
    <>

      <div className='' style={{ paddingBottom: '50px', marginBottom: '30px', marginTop: '30px' }}>
        <h1 style={{ justifyContent: 'center', paddingTop: '20px' }}>Our Products</h1>
        <p style={{ padding: '20px' }}>
          WARALS Technology has an extensive range of Industry Specific Management
          Software Products. These products are a comprehensive blend of CRM and
          Accounting modules which provide an absolute solution for managing all
          essential Business Functions in one place.
        </p>
        <p style={{ padding: '30px' }}>Our school management software efficiently organizes customized databases such as scheduling online classes with quizzes and managing inquiries, admission, batches, fees, etc. All User-friendly modules streamline the entire administration, get insights for the overall status of management to prioritize business needs, compound sales, and drive business growth.</p>
      </div>
      <div class="product-container">
        <div>
          <img src={require('../components/assets/pot.png')} />
        </div>
        <div class="content" style={{ marginRight: '10px', paddingBottom: '40px' }}>
          <h1>WARALS INSTITUTE MANAGEMENT SYSTEM</h1>
          <p>
            WARALS IMS reduces the operational complexity of academic institutes. It helps institutes achieve the core goal and maximize revenue generation. As a specialized product and a result of collaborative efforts by our architects, WARALS institute management software manages vital academic records and enhances administrative synchronization
          </p>
        </div>
        <div class="images" style={{ position: 'relative', paddingBottom: '60px', marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <img className= "dn" src={require('../components/assets/product.png')} style={{ marginLeft: '50px' }} />
          <div className="image-container" >
            <VerticalCircularBand />
            <img src={require('../components/assets/blah.png')} style={{ height: '40vh', display: 'flex', flexDirection: 'float', marginLeft: '60px' }} />
          </div>
        </div>
      </div>
      <div class="product-container">
        <div class="images2" style={{ position: 'relative', paddingBottom: '60px', marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>

          <img className='dn' src={require('../components/assets/product.png')} />
          <div className="image-container1" >
            <VerticalCircularBand />
            <img src={require('../components/assets/blah.png')} style={{ height: '40vh', display: 'flex', flexDirection: 'float', marginRight: '80px', justifyContent: 'center' }} />
          </div>
          <div class="contents">
            <h1>WARALS LEARNING MANAGEMENT SYSTEM</h1>
            <p>WARALS LMS is a powerful Learning Management System for schools and institutes, designed to revolutionize the E-Learning system. Its salient features consist of conducting Live Online classes with the option of Online Quizzes. It comes with each essential tool to meet your all E-Learning needs and provides flexibility for all requirements.</p>
          </div>
        </div>
      </div>
      <div class="product-container">
        <div>
          <img src={require('../components/assets/pot.png')} />
        </div>
        <div class="content" style={{ marginLeft: '50px', paddingBottom: '60px', paddingTop: '30px', marginTop: '30px' }}>
          <h1>WARALS UNIVERSITY MANAGEMENT SYSTEM</h1>
          <p>WARALS UNIVERSITY/COLLEGE MANAGEMENT SYSTEM (UMS) is a powerful product of Warals Technology which automates all the functions of Universities and Colleges. Warals University/College ERP covers each and every aspect of a university’s work flow and coordinates all cycles with an easy to understand interface.</p>
        </div>
        <div class="images3" style={{ position: 'relative', paddingBottom: '60px', marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
          <img className="dn" src={require('../components/assets/product.png')} style={{ marginLeft: '50px' }} />
          <div className="image-container" >
            <VerticalCircularBand />
            <img src={require('../components/assets/blah.png')} style={{ height: '40vh', display: 'flex', flexDirection: 'float', marginLeft: '50px' }} />
          </div>
        </div>
      </div>
      <div className="band" >
        <div className="band-content">
          <div className="put-img">
            <img
              src={require('../components/assets/07.png')}
              alt="band"
            />
            <div>
              <h1 style={{ fontWeight: 'bold', alignContent: 'left', padding: '16px', marginTop: '20px', color: 'white' }}>
                Lorem ipsum dolor sit amet consectetur cgf ftyftyghjg gghghhgffvgv ghghgvhg
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="feature" >
        <h2 style={{ alignItems: 'center', padding: '20px', marginTop: '20px' }}>
          Our Features
        </h2>
        {/* Feature boxes with random YouTube links */}
        <div className="feature-box-container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '10px', justifyContent: 'space-between' }}>
          {youtubeLinks.map((link, index) => (
            <div className="feature-box" key={index}>

              <iframe
                width="300"
                height="200"
                src={link}
                allowFullScreen
                title={`Feature ${index + 1}`}

              >
              </iframe>
              <div>This is some text related to Feature {index + 1}</div>
            </div>
          ))}
        </div>
        <div className="cust" style={{ padding: '20px', marginTop: '20px' }}>
        <h2>Loved By Our Customers</h2>
        
      
        <Carousel interval={5000} pause="hover" indicators={false}>
          {dummyReviews.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {[0, 1, 2].map((subIndex) => (
                  <animated.div style={reviewSpring} key={subIndex}>
                    <Card variant="outlined">
                    <div className="customer-box" style={{ padding: '10px', marginBottom: '10px', borderRadius: '3px solid black'}}>
                      <Avatar style={{ ...avatarStyle, alignItems: 'center' }}>
                        <Avatar sx={{ backgroundColor: red[500], alignContent: 'center' }}>{item.name.charAt(0)}</Avatar>
                      </Avatar>
                      <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                      <p>{item.feedback}</p>
                    </div>
                    </Card>
                  </animated.div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="footer">
        <h1>Contact Us</h1>
        <Card variant="outlined">
        <div className="contact" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div className="contact-card" style={{width:'30vw', height:'25vh',backgroundColor: '#81C784', padding:'15px'}}>
            <h3><LocationOn /> Address</h3>
            <p>{contactInfo.address}</p>
          </div>
          <div className="contact-card" style={{width:'30vw', height:'25vh',backgroundColor: '#64B5F6', padding:'15px'}}>
            <h3><PhoneOutlined /> Phone</h3>
            <p>{contactInfo.phone}</p>
          </div>
          <div className="contact-card" style={{width:'30vw', height:'25vh',backgroundColor: '#FFB74D', padding:'15px'}}>
            <h3><Email /> Email</h3>
            <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          </div>
        </div>
        </Card>
      </div>
      </div>
      
    </>
  );
};


export default Products;