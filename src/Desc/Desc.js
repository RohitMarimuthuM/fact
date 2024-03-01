import React from 'react';
import './Desc.css'; // Import your CSS file

const Desc = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <h2 style={{textAlign:'center',fontFamily:'Antonio',color:'white',fontSize:'30px'}}>Explore</h2>
    <br/>
    <br/>
    

    <div className="card-container">
        
      <div className="card">
        <h3>CRYPTOCURRENCY</h3>
        <p>
Discover cryptocurrency values and breaking news on our site – your simplified guide to navigating the dynamic world of digital currencies.</p>
        <button>Explore</button>
      </div>
      <div className="card">
        <h3>ARTIFICIAL INTELLIGENCE</h3>
        <p>
Explore the realm of artificial intelligence with us, unraveling its impact and applications in diverse fields</p>
        <button>Explore</button>
      </div>
      <div className="card">
        <h3>ROBOTICS</h3>
        <p>

Explore our website for a glimpse into cutting-edge robotics, featuring advancements across various fields and applications</p>
        <button>Explore</button>
      </div>
      <div className="card">
        <h3>RANDOM FACTS</h3>
        <p>Visit our website to learn cool and interesting facts about lots of different things. It's like a fun adventure where you discover new and exciting information!</p>
        <button>Explore</button>
      </div>
      
    </div>
    </>
  );
};

export default Desc;

