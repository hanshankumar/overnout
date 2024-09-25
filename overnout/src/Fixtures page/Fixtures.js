import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import india from '../Fixtures page/India.png';
import pakistan from '../Fixtures page/Pakistan.png';
import england from '../Fixtures page/England.png';
import australia from '../Fixtures page/australia.jpeg';
import nz from '../Fixtures page/NewZealand.png';
import sa from '../Fixtures page/sa.png';
import ba from '../Fixtures page/ba.png';

function Matches() {
  const [selectedCategory, setSelectedCategory] = useState('live');

  const matchData = {
    live: [
      {
        team1: 'India',
        team2: 'Australia',
        score: '250/4 (45 overs)',
        stadium: 'Kolkata Stadium',
        location: 'Kolkata',
        team1Img: india,
        team2Img: australia
      },
      {
        team1: 'England',
        team2: 'Pakistan',
        score: '180/3 (30 overs)',
        stadium: 'Lords Stadium',
        location: 'London',
        team1Img: england,
        team2Img: pakistan
      },
      {
        team1: 'New Zealand',
        team2: 'Pakistan',
        score: '180/3 (30 overs)',
        stadium: 'Rawalpindi Stadium',
        location: 'Pakistan',
        team1Img: nz,
        team2Img: pakistan
      }
    ],
    upcoming: [
      {
        team1: 'India',
        team2: 'South Africa',
        date: '25th September',
        stadium: 'Wankhede Stadium',
        location: 'Mumbai',
        team1Img: india,
        team2Img: sa
      },
      {
        team1: 'New Zealand',
        team2: 'Australia',
        date: '28th September',
        stadium: 'Eden Park',
        location: 'Auckland',
        team1Img: nz,
        team2Img: australia
      },
      {
        team1: 'India',
        team2: 'Bangladesh',
        date: '30th September',
        stadium: 'Green Park',
        location: 'Kanpur',
        team1Img: india,
        team2Img: ba
      }
    ],
    results: [
      {
        team1: 'India',
        team2: 'England',
        result: 'India won by 50 runs',
        stadium: 'The Oval',
        location: 'London',
        team1Img: india,
        team2Img: england
      },
      {
        team1: 'Pakistan',
        team2: 'South Africa',
        result: 'Pakistan won by 3 wickets',
        stadium: 'Gaddafi Stadium',
        location: 'Lahore',
        team1Img: pakistan,
        team2Img: sa
      }
    ]
  };

  const renderMatches = () => {
    const matches = matchData[selectedCategory];
    return matches.map((match, index) => (
      <div className="card mb-3" key={index} style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#3A6D8C', color: 'white' }}>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div className="team-image">
            <img src={match.team1Img} alt={match.team1} style={{ height: '100px', width: '100px', objectFit: 'cover' }} />
          </div>

          <div className="text-center">
            <h5 className="card-title">{match.team1} vs {match.team2}</h5>
            {selectedCategory === 'live' && <p className="card-text"><strong>Score:</strong> {match.score}</p>}
            {selectedCategory === 'upcoming' && <p className="card-text"><strong>Date:</strong> {match.date}</p>}
            {selectedCategory === 'results' && <p className="card-text"><strong>Result:</strong> {match.result}</p>}
            <p className="card-text"><strong>Stadium:</strong> {match.stadium}</p>
            <p className="card-text"><strong>Location:</strong> {match.location}</p>
          </div>

          <div className="team-image">
            <img src={match.team2Img} alt={match.team2} style={{ height: '100px', width: '100px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">International Matches</h1>
      <div className="d-flex justify-content-center mb-4">
      <div className="btn-group mb-4" role="group">
        <button
          type="button"
          className={`btn ${selectedCategory === 'live' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setSelectedCategory('live')}
        >
          Live Matches
        </button>
        <button
          type="button"
          className={`btn ${selectedCategory === 'upcoming' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setSelectedCategory('upcoming')}
        >
          Upcoming Matches
        </button>
        <button
          type="button"
          className={`btn ${selectedCategory === 'results' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setSelectedCategory('results')}
        >
          Match Results
        </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {renderMatches()}
        </div>
      </div>
    </div>
  );
}

export default Matches;
