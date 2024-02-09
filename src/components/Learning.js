import React from 'react'
import CustomNavbar from './Navbar'
const Learning = () => {
  return (
    <>
    <CustomNavbar/>
    <div className="bands" >
    <div className="bands-content">
        
        <div className="put-img">
            <img
                src={require('../components/assets/Institutebanner1.png')}
                alt="bands"
            />
        </div>
       <div>
        </div>
       
                    
                    <div className="inst">
                        <h1 style={{ fontWeight: 'bold',textAlign:'center', color: 'black',marginBottom:'40px' }}>
                            Learning Management System
                        </h1>
                        <p>Warals LMS is a powerful learning management system with the features and flexibility to fit your e Learning needs. You can easily create powerful and effective e Learning programs that train, validate, and communicate. Warals LMS is designed to reduce operational complexity and help to achieve the core goal of revenue generation of any Institutes/Training organizations. LMS, as a specialized product is a result of collaborative efforts by our developers and end-users by getting the business requirements. We have developed all the required functions which can help to achieve the desired result with minimal effort and with easy to use interface.</p>



                            <div className="banding" style={{ paddingBottom: '30px',color:'white' }}>
            <div className="banding-content">
                <h1 style={{textAlign:'right',justifyContent:'flex-end',marginTop:'65px' ,display: 'flex'}}>Warals Learning Management System</h1>
                <div className="put-img">
                    <img
                        src={require('../components/assets/07.png')}
                        alt="banding"/>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Learning
