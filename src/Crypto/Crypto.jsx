import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Crypto.css'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';

const Crypto = () => {
    const [facts, setFacts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3600/items');
          if (!response.ok) throw new Error('Data not found');
          const data = await response.json();
          
          // Shuffle the data array
          const shuffledData = shuffleArray(data);
          // Select the first 5 items from the shuffled array
          const selectedFacts = shuffledData.slice(0, 5);
  
          setFacts(selectedFacts);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Function to shuffle the array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    return (
        <>
        <Navbar/>
        <div className='container'>
            <div className='crypto'>
                <div className='crypto-header'>CRYPTO</div>
            </div>
                <div className='crypto'>
                    <div className='search-bar'>
                         <input type='text' placeholder='Search...' className='searchinp'/>
                         <FontAwesomeIcon icon={faSearch} className='search-icon' />
                         </div>
                <div className='price'><p style={{marginLeft:'40px'}}>Price</p>
                    <p style={{color:'violet',paddingLeft:'30px'}}>$2500000</p>
                </div>
            </div>
        </div>
        <br/>
        <div className='container-news'>
            <div className='news'>Facts</div>
        </div>
        <hr style={{width:'90px',color:'#696982'}}></hr>
        <br/>
        <br/>
        <div>
       
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.desp}</li>
        ))}
      </ul>
    </div>
        </>
    );
};

export default Crypto;
