import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Kohli from '../images/kohli.jpeg';
import Rohit from '../images/rohit.jpeg';
import Bumrah from '../images/bumrah.jpg';
import Hardik from '../images/hardik.jpeg'
import Jaiswal from '../images/jaiswal.png'
import Yadav from '../images/yadav.avif'
import Patel from '../images/patel.avif'
import Jadeja from '../images/jadeja.webp'
import Pant from '../images/pant.jpg'
import Samson from '../images/samson.avif'
import Dube from '../images/dube.avif'
import Kuldeep from '../images/kuldeep.jpg'
import Chahal from '../images/chahal.jpg'
import Singh from '../images/singh.webp'
import Siraj from '../images/siraj.avif'

const players = [
  {
    name: 'Virat Kohli',
    age : 35,
    batting: 'Right-handed',
    bowling : 'Right-arm medium',
    imgSrc: Kohli
  },
  {
    name: 'Rohit Sharma',
    age : 30,
    batting: 'Right-handed',
    bowling : 'Right-arm off break',
    imgSrc: Rohit
  },
  {
    name: 'Jasprit Bumrah',
    age:30,
    batting:'Right-handed',
    bowling:'Right-arm fast',
    imgSrc: Bumrah 
  },
  {
    name: 'Hardik Pandya',
    age:30,
    batting:'Right-handed',
    bowling:'Right-arm medium-fast',
    imgSrc: Hardik
  },
  {
    name: 'Yashasvi Jaiswal',
    age:30,
    batting:'Left-handed',
    bowling:'Leg-break',
    imgSrc: Jaiswal
  },
  {
    name: 'SuryaKumar Yadav',
    age:34,
    batting:'Right-handed',
    bowling:'Right arm off-break',
    imgSrc: Yadav
  },
  {
    name: 'Axar Patel',
    age:30,
    batting:'Left-handed',
    bowling:'Left arm orthodox',
    imgSrc: Patel
  },
  {
    name: 'Ravindra Jadeja',
    age:35,
    batting:'Left-handed',
    bowling:'Left arm orthodox',
    imgSrc: Jadeja
  },
  {
    name: 'Rishabh Pant',
    age:26,
    batting:'Left-handed',
    bowling:'Right arm medium',
    imgSrc: Pant
  },
  {
    name: 'Sanju Samson',
    age:30,
    batting:'Right-handed',
    bowling:'Right arm fast seam',
    imgSrc: Samson
  },
  {
    name: 'Shivam Dube',
    age:31,
    batting:'Left-handed',
    bowling:'Right arm medium',
    imgSrc: Dube
  },
  {
    name: 'Kuldeep Yadav',
    age:29,
    batting:'Left-handed',
    bowling:'Right arm wrist spin',
    imgSrc: Kuldeep
  },
  {
  name: 'Yuzvendra Chahal',
  age:34,
  batting:'Right-handed',
  bowling:'Leg break googly',
  imgSrc: Chahal
 },
 {
  name: 'Arshdeep Singh',
  age:34,
  batting:'Left-handed',
  bowling:'Left arm fast medium',
  imgSrc: Singh
 },
 {
  name: 'Mohammed Siraj',
  age:30,
  batting:'Right-handed',
  bowling:'Right arm fast',
  imgSrc: Siraj
 }

];

function Players() {
  return (
    <div className="container mt-5">
      <h1 className="text-left mb-4">Indian Team Players</h1>
      <div className="row">
        {players.map((player, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card"
            style={{ 
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.50)', 
              backgroundColor: '#3A6D8C', 
              color: 'white',
              transition: 'all 0.3s ease-in-out',
               cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.60)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.50)';
            }}
            >
              <img src={player.imgSrc} className="card-img-top" alt={player.name} style={{ height: '200px', objectFit: 'cover'}} />
              <div className="card-body">
                <h5 className="card-title" style={{fontSize:'25px'}}>{player.name}</h5>
                <p className="card-text"><strong>Age:</strong> {player.age}</p>
                <p className="card-text"><strong>Batting:</strong> {player.batting}</p>
                <p className="card-text"><strong>Bowling:</strong> {player.bowling}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Players;
