import React from 'react'
import CustomNavbar from './Navbar'
import { Card, Container, Row, Col } from 'react-bootstrap';

const Institute = () => {
  return (
    <>
      <CustomNavbar />
      <div className="home-container">
        {/* Band with Image */}
        <div className="band">
          <div className="image-content">
            <img
              src={require('../components/assets/1545451 (1).png')}
              alt="Home Image"
              className="band-image"
            />
          </div>
          <div className="text-content" style={{ alignItems: 'center', justifyContent: 'center', marginTop: '10rem' }}>
            <h1>WARALS Institute Management System</h1>
            <p>
              LMS for all kind of institutes and training organization.
            </p>
          </div>
        </div>
      </div>


      <div className="inst">
        <h1 style={{ fontWeight: 'bold', textAlign: 'center', color: 'black', marginBottom: '40px',paddingRight:'15px' }}>
          Institute Management System
        </h1>
        <p>WIMS is like a Mini-ERP for all kind of institutes and training organizations. WIMS is designed to reduce operational complexity and help to achieve the core goal of revenue generation of any Institutes/Training organizations. WIMS, as a specialized product is a result of collaborative efforts by our architects and end-users by getting the business requirements and aligning the flow according to them.</p>

        <p> We have developed all the required functions which can help to achieve the desired result with minimal effort and fewer resources and not to mention with easy to use interface</p></div>



      <div className="band" >
        <div className="band-content">
          <div className="put-img">
            <img
              src={require('../components/assets/07.png')}
              alt="band"
            />
            
            <div style={{color:'white'}}>
              <h1 style={{ fontWeight: 'bold', alignContent: 'left', padding: '16px', marginTop: '40px' }}>
                Why WIMS is Unique in Offerings</h1>
              <p>It is hard to find full-featured offering specific to Institute and Training Organizations which can cover all aspects of a business. It reduces the pain of maintaining different department on the various application and makes life easy of entrepreneurs.</p>

            </div>
          </div>
        </div>
      </div>
      <Container className="my-5">
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: '#fff' }} >
              <Card.Body style={{ height: '50vh' }}>
              <img
              src={require('../components/assets/step1.png')}
              alt="band"
            />
                <Card.Title style={{fontWeight:'bold',paddingTop:'25px',paddingBottom:'40px'}}>MARKETING & SALES</Card.Title>
                <Card.Text>
                Leads Management, Inquiry Follow-ups, Email/SMS Integration for Inquiry Follow-ups, Admissions
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: '#fff' }}>
              <Card.Body style={{ height: '50vh' }}>
              <div className="ryn" style={{paddingTop:'25px'}}>
                <div className="step">4</div>
                <div className="circle">
              <img
              src={require('../components/assets/step2.png')}
              alt="band"
            /></div></div>
                <Card.Title style={{fontWeight:'bold',paddingTop:'25px',paddingBottom:'40px'}}>OPERATIONS
</Card.Title>
                <Card.Text>
                Batch Scheduling, Trainers/Students/Employees Management, Course Tracker, Attendance
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: '#fff' }}>
              <Card.Body style={{ height: '50vh' }}>
              <div className="ryn" style={{paddingTop:'25px'}}>
                <div className="step">4</div>
                <div className="circle">
              <img
              src={require('../components/assets/step3.png')}
              alt="band"
            /></div></div>
                <Card.Title style={{fontWeight:'bold',paddingTop:'25px',paddingBottom:'40px'}}>FINANCE</Card.Title>
                <Card.Text>
                Fee management and Reminders, Expense Management , Employee Salaries, Financials reports,
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card style={{ backgroundColor: '#fff' }}>
              <Card.Body style={{ height: '50vh' }}>
                <div className="ryn" style={{paddingTop:'25px'}}>
                <div className="step">4</div>
                <div className="circle">
              <img
              src={require('../components/assets/step4.png')}
              alt="band"
            /></div></div>
                <Card.Title style={{fontWeight:'bold',paddingTop:'15px',paddingBottom:'30px'}}>AUTOMATION</Card.Title>
                <Card.Text>
                Email and SMS Panel Integration, Auto Assignment of Leads, Auto Email of Reports
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>





    </>


  )
}

export default Institute;
