import React from 'react';
import './App.css';

function App() {
  // Single office object
  const mainOffice = {
    name: "Elegant Office Space",
    rent: 55000,
    address: "123 Business St, Cityville",
    image: "https://5.imimg.com/data5/AX/LK/HL/SELLER-56879336/office-space-for-rent-1000x1000.jpg" // Replace with actual image URL
  };

  // List of office spaces
  const officeList = [
    {
      name: "Space A",
      rent: 55000,
      address: "101 Maple Ave, Tech Park",
      image: "https://media.istockphoto.com/id/685774732/photo/real-estate-broker-showing-office-space-to-clients.jpg?s=612x612&w=0&k=20&c=gCk6afv5c3xEiOMHgNoH3jtDD4wUf5_6doEoexSeyCU="
    },
    {
      name: "Space B",
      rent: 65000,
      address: "202 Elm St, Innovation Hub",
      image: "https://res.akamaized.net/domain/image/fetch/t_web/https://static.domain.com.au/cre/production/2018/08/officegeneric-istockadvice13.jpg"
    },
    {
      name: "Space C",
      rent: 48000,
      address: "303 Oak Blvd, Startup Lane",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYv4YTf_-7VeP2p7Lq-PG4_i_-GeIcmvlGUA&s"
    }
  ];

  // Styling for each office box
  const boxStyle = {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div className="App">
      <h1>Office Space Rental</h1>

      {/* Displaying single office */}
      <div style={boxStyle}>
        <img src={mainOffice.image} alt="Main Office" width="300" />
        <h2>{mainOffice.name}</h2>
        <p style={{ color: mainOffice.rent < 60000 ? 'red' : 'green' }}>
          Rent: ₹{mainOffice.rent}
        </p>
        <p>Address: {mainOffice.address}</p>
      </div>

      {/* Displaying list of offices */}
      <h2>Other Available Spaces:</h2>
      {officeList.map((office, index) => (
        <div key={index} style={boxStyle}>
          <img src={office.image} alt={office.name} width="300" />
          <h3>{office.name}</h3>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            Rent: ₹{office.rent}
          </p>
          <p>Address: {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
