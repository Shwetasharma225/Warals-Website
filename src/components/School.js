import React from 'react'
import CustomNavbar from './Navbar'

const School = () => {
  return (
    <>
        <CustomNavbar/>
        <div className="bands" >
        <div className="bands-content">
            
            <div className="put-img">
                <img
                    src={require('../components/assets/Institute_Management_System1.png')}
                    alt="bands"
                />
            </div>
           <div>
            </div>
           
                        
                        <div className="inst">
                            <h1 style={{ fontWeight: 'bold',textAlign:'center', color: 'black',marginBottom:'40px' }}>
                                School Management System
                            </h1>
                            <p>WSMS (WARALS School Management System) is designed to reduce operational complexity and help to achieve the core goal of delivering good quality education and improving revenue generation of Schools for growth. WSMS, as a specialized product is a result of collaborative efforts by our architects and schools by getting the functional requirements and aligning the flow according to them.

Our Strong reporting Tool helps in informed decision making, and Informative Dashboard provides a quick snapshot of overall business for managers and owners. In addition to this, since we are the maker, therefore we can customize it as per your needs.

We have developed all the required functions which can help to achieve the desired result with minimal effort and fewer resources and not to mention with easy to use interface.</p></div>



                                <div className="banding" style={{ paddingBottom: '30px',color:'white' }}>
                <div className="banding-content">
                    <h1 style={{textAlign:'right',justifyContent:'flex-end',marginTop:'65px' ,display: 'flex'}}>Warals School Management System</h1>
                    <div className="put-img">
                        <img
                            src={require('../components/assets/07.png')}
                            alt="banding"/>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

  )
}

export default School
