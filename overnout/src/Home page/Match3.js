import React from 'react';
import './Match.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Scorecard() {
  const indianInnings = {
    batters: [
      { name: 'Tom Latham(c)', runs: 27, balls: 53, fours: 4, sixes: 0, strikeRate: 50.94 },
      { name: 'Tom Blundell', runs: 14, balls: 19, fours: 2, sixes: 0, strikeRate: 73.68 },
      { name: 'Will Young', runs: 43, balls: 87, fours: 4, sixes: 0, strikeRate: 49.92 },
      { name: 'Ross Taylor', runs: 9, balls: 12, fours: 1, sixes: 1, strikeRate: 75.00 },
      { name: 'Hendry Nicholls ', runs: 174, balls: 21, fours: 0, sixes: 0, strikeRate: 62.14 },
      { name: 'BJ Walting ', runs: 30, balls: 51, fours: 6, sixes: 0, strikeRate: 58.82 },
      { name: 'Darry Mitchell', runs: 42, balls: 68, fours: 5, sixes: 1, strikeRate: 61.76 },
      { name: 'Kyle Jameisan', runs: 20, balls: 57, fours: 3, sixes: 0, strikeRate: 35.08 },
      { name: 'Tim Southee', runs: 11, balls: 12, fours: 2, sixes: 0, strikeRate: 91.66 },
      { name: 'Neil Wagner', runs: 66, balls: 42, fours: 8, sixes: 4, strikeRate: 157.14 },
      { name: 'Trent Boult', runs: 6, balls: 3, fours: 0, sixes: 1, strikeRate: 200.00 },
    ],
    bowlers: [
      { name: 'Shannon Gabriel', overs: 26, maidens: 7, runs: 93, wickets: 3, economy: 3.57 },
      { name: 'Jason Holder', overs: 27, maidens: 6, runs: 85, wickets: 0, economy: 3.14 },
      { name: 'Alzarri Joseph', overs: 22, maidens: 2, runs: 109, wickets: 3, economy: 3.75 },
      { name: 'Chemar Holder', overs: 26, maidens: 1, runs: 110, wickets: 2, economy: 4.95},
      { name: 'Roston Chase', overs: 13, maidens: 1, runs: 54, wickets: 2, economy: 4.15 },
     
    ]
  };

  const southAfricanInnings = {
    batters: [
      { name: 'kraigg Braithwaite', runs: 0, balls: 8, fours: 0, sixes: 0, strikeRate: 0.00 },
      { name: 'John Campbell', runs: 14, balls: 37, fours: 2, sixes: 0, strikeRate: 37.83 },
      { name: 'Darren Bravo', runs: 7, balls: 30, fours: 1, sixes: 0, strikeRate: 23.33 },
      { name: 'Shamarh Brooks', runs: 14, balls: 92, fours: 1, sixes: 0, strikeRate: 15.21 },
      { name: 'Roston Chase', runs: 0, balls: 1, fours: 2, sixes: 0, strikeRate: 0.00 },
      { name: 'Jermaine Blackwood', runs: 69, balls: 92, fours: 11, sixes: 0, strikeRate: 75.00 },
      { name: 'Jason Holder(c)', runs: 9, balls: 25, fours: 0, sixes: 0, strikeRate: 36.00 },
      { name: 'Joshua Da Silva', runs: 3, balls: 25, fours: 0, sixes: 0, strikeRate: 12.00 },
      { name: 'Alzari Joseph', runs: 0, balls: 3, fours: 0, sixes: 0, strikeRate: 0.00 },
      { name: 'Chemari Holder', runs: 8, balls: 22, fours: 0, sixes: 0, strikeRate: 36.36 },
      { name: 'Shannon Gabriel', runs: 2, balls: 6, fours: 0, sixes: 0, strikeRate: 33.33 },
    ],
    
    bowlers: [
      { name: 'Tim Southee', overs: 17.4, maidens: 6, runs: 32, wickets: 5, economy: 1.8 },
      { name: 'Trent Boult', overs: 14, maidens: 6, runs: 34, wickets: 0, economy: 2.42 },
      { name: 'Neil Wagner', overs: 12, maidens: 6, runs: 28, wickets: 0, economy: 2.33 },
      { name: 'Kyle Jamieson', overs: 13, maidens: 6, runs: 34, wickets: 5, economy: 2.61 },
   
    ]
  };

  const southAfricanInnings2nd = {
    batters: [
      { name: 'kraigg Braithwaite', runs: 24, balls: 42, fours: 3, sixes: 0, strikeRate: 57.14 },
      { name: 'John Campbell', runs: 68, balls: 109, fours: 8, sixes: 0, strikeRate: 62.38 },
      { name: 'Darren Bravo', runs: 4, balls: 3, fours: 1, sixes: 0, strikeRate: 133.33 },
      { name: 'Shamarh Brooks', runs: 36, balls: 72, fours: 4, sixes: 1, strikeRate: 50.00 },
      { name: 'Roston Chase', runs: 0, balls: 7, fours: 0, sixes: 0, strikeRate: 0.00 },
      { name: 'Jermaine Blackwood', runs: 20, balls: 33, fours: 1, sixes: 0, strikeRate: 60.60 },
      { name: 'Jason Holder(c)', runs: 61, balls: 93, fours: 8, sixes: 0, strikeRate: 65.59 },
      { name: 'Joshua Da Silva', runs: 57, balls: 84, fours: 6, sixes: 2, strikeRate: 67.85 },
      { name: 'Alzari Joseph', runs: 24, balls: 12, fours: 3, sixes: 0, strikeRate: 200.00 },
      { name: 'Chemari Holder', runs: 13, balls: 15, fours: 3, sixes: 0, strikeRate: 86.66 },
      { name: 'Shannon Gabriel', runs: 0, balls: 6, fours: 0, sixes: 0, strikeRate: 0.00 },
    ],
    
    bowlers: [
      { name: 'Tim Southee', overs: 22, maidens: 4, runs: 96, wickets: 2, economy: 4.36 },
      { name: 'Trent Boult', overs: 21, maidens: 4, runs: 96, wickets: 3, economy: 4.57 },
      { name: 'Neil Wagner', overs: 15, maidens: 3, runs: 43, wickets: 2, economy: 2.86 },
      { name: 'Kyle Jamieson', overs: 17.1, maidens: 4, runs: 54, wickets: 3, economy: 3.14 },
      { name: 'Daryl Mitchell', overs: 4, maidens: 0, runs: 20, wickets: 0, economy: 5.00 },
   
    ]
  };

 

  const renderInnings = (innings) => (
    <div className="mt-5">
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
      <p className='win'><strong>New Zealand</strong> won by an innings and 12 runs</p>
      <p className='win'>NZ :<span></span> 460-10</p><span></span>
      <p className='win'>WI :<span></span> 131-10 & 317-10</p><span></span>
      <h2>New Zealand Innings</h2>
      {renderInnings(indianInnings)}
      <h2>West Indies Innings</h2>
      {renderInnings(southAfricanInnings)}
    </div>
  );
}

export default Scorecard;