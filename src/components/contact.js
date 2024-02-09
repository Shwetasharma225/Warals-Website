import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";
import { LocationOn, PhoneOutlined, Email } from "@mui/icons-material";

const contactInfo = {
  address: "Your Address",
  phone: "Your Phone",
  email: "your@email.com",
};

const Contact = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <div className="contact-container">
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
          <div className="footer">
            <h1>Contact Us</h1>
            <div className="contact" style={{ display: 'flex', flexDirection: 'row', padding: '10px', justifyContent: 'space-between' }}>
              <p><LocationOn /> <strong>Address:</strong> {contactInfo.address}</p>
              <p><PhoneOutlined /> <strong>Phone:</strong> {contactInfo.phone}</p>
              <p><Email /> <strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
