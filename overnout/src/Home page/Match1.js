import React from 'react';
import './Match.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Scorecard() {
  const indianInnings = {
    team: 'India',
    batters: [
      { name: 'Rohit Sharma (c)', runs: 9, balls: 5, fours: 2, sixes: 0, strikeRate: 180 },
      { name: 'Virat Kohli', runs: 76, balls: 59, fours: 6, sixes: 2, strikeRate: 128.81 },
      { name: 'Rishabh Pant (wk)', runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 },
      { name: 'Rishabh Pant', runs: 0, balls: 2, fours: 0, sixes: 0, strikeRate: 0 },
      { name: 'Surya Kumar Yadav', runs: 3, balls: 4, fours: 0, sixes: 0, strikeRate: 75 },
      { name: 'Axar Patel', runs: 47, balls: 31, fours: 1, sixes: 4, strikeRate: 151.61 },
      { name: 'Shivam Dube', runs: 27, balls: 16, fours: 3, sixes: 1, strikeRate: 168.75 },
      { name: 'Hardik Pandya', runs: 5, balls: 2, fours: 1, sixes: 0, strikeRate: 250 },
      { name: 'Ravindra jadeja', runs: 2, balls: 2, fours: 0, sixes: 0, strikeRate: 100 },
    ],
    bowlers: [
      { name: 'Marco Jansen', overs: 4, maidens: 0, runs: 49, wickets: 1, economy: 12.2 },
      { name: 'Maharaj', overs: 3, maidens: 0, runs: 23, wickets: 2, economy: 7.7 },
      { name: 'Rabada', overs: 4, maidens: 0, runs: 36, wickets: 1, economy: 9 },
      { name: 'Markram (c)', overs: 2, maidens: 0, runs: 16, wickets: 0, economy: 6.5 },
      { name: 'Nortje', overs: 4, maidens: 0, runs: 26, wickets: 2, economy: 6.5 },
      { name: 'Shamsi', overs: 3, maidens: 0, runs: 26, wickets: 0, economy: 8.7 },
    ]
  };

  const southAfricanInnings = {
    team: 'South Africa',
    batters: [
      { name: 'Hendricks', runs: 4, balls: 5, fours: 1, sixes: 0, strikeRate: 80 },
      { name: 'Quinton de cock (wk)', runs: 39, balls: 31, fours: 4, sixes: 1, strikeRate: 125.81 },
      { name: 'Aiden Markram (c)', runs: 4, balls: 5, fours: 1, sixes: 0, strikeRate: 80 },
      { name: 'Tristan Stubbs', runs: 31, balls: 21, fours: 3, sixes: 1, strikeRate: 147.62 },
      { name: 'Heinrich klaasen', runs: 52, balls: 27, fours: 2, sixes: 5, strikeRate: 192.59 },
      { name: 'David Miller', runs: 21, balls: 17, fours: 1, sixes: 1, strikeRate: 123.53 },
      { name: 'Marco Jansen', runs: 2, balls: 4, fours: 0, sixes: 0, strikeRate: 50 },
      { name: 'Keshav Maharaj', runs: 2, balls: 7, fours: 0, sixes: 0, strikeRate: 28.57 },
      { name: 'Rabada', runs: 4, balls: 3, fours: 1, sixes: 0, strikeRate: 133.33 },
      { name: 'Nortje', runs: 1, balls: 1, fours: 0, sixes: 0, strikeRate: 100 },
    ],
    bowlers: [
      { name: 'Arshdeep Singh', overs: 4, maidens: 0, runs: 20, wickets: 2, economy: 5 },
      { name: 'Jasprit Bumrah', overs: 4, maidens: 0, runs: 18, wickets: 2, economy: 4.5 },
      { name: 'Axar Patel', overs: 4, maidens: 0, runs: 49, wickets: 1, economy: 12.2 },
      { name: 'Kuldeep Yadav', overs: 4, maidens: 0, runs: 45, wickets: 0, economy: 11.2 },
      { name: 'Hardik Pandya', overs: 3, maidens: 0, runs: 20, wickets: 3, economy: 6.7 },
      { name: 'Ravindra Jadeja', overs: 1, maidens: 0, runs: 12, wickets: 0, economy: 12 },
    ]
  };

  const renderInnings = (innings) => (
    <div className="mt-5">
      <h2>{innings.team} Innings</h2>
      <br></br>
      <h4>Batters</h4>
      <table className="table table-bordered custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Runs</th>
            <th>Balls</th>
            <th>4s</th>
            <th>6s</th>
            <th>Strike Rate</th>
          </tr>
        </thead>
        <tbody>
          {innings.batters.map((batter, index) => (
            <tr key={index}>
              <td>{batter.name}</td>
              <td>{batter.runs}</td>
              <td>{batter.balls}</td>
              <td>{batter.fours}</td>
              <td>{batter.sixes}</td>
              <td>{batter.strikeRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="mt-4">Bowlers</h4>
      <table className="table table-bordered custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Overs</th>
            <th>Maidens</th>
            <th>Runs</th>
            <th>Wickets</th>
            <th>Economy</th>
          </tr>
        </thead>
        <tbody>
          {innings.bowlers.map((bowler, index) => (
            <tr key={index}>
              <td>{bowler.name}</td>
              <td>{bowler.overs}</td>
              <td>{bowler.maidens}</td>
              <td>{bowler.runs}</td>
              <td>{bowler.wickets}</td>
              <td>{bowler.economy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mt-5">
      <h1>Scorecard</h1>
      <br></br>
      <p className='win'><strong>India</strong> won by 7 runs</p>
      <p className='win'>IND :<span></span> 176-7</p><span></span>
      <p className='win'>RSA :<span></span> 169-8</p><span></span>
      {renderInnings(indianInnings)}
      {renderInnings(southAfricanInnings)}
    </div>
  );
}

export default Scorecard;
