import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Match() {
  const englandInnings = {
    team: 'England',
    batters: [
      { name: 'Jason Roy', runs: 9, balls: 19, fours: 1, sixes: 0, strikeRate: 47.36 },
      { name: 'Dawid Malan', runs: 12, balls: 15, fours: 1, sixes: 1, strikeRate: 80 },
      { name: 'Ben Duckett', runs: 20, balls: 32, fours: 1, sixes: 0, strikeRate: 62.50 },
      { name: 'Harry Brook', runs: 80, balls: 75, fours: 7, sixes: 4, strikeRate: 106.66 },
      { name: 'Jos Buttler (C) (Wk)', runs: 94, balls: 82, fours: 8, sixes: 3, strikeRate: 114.63 },
      { name: 'Moeen Ali', runs: 51, balls: 45, fours: 6, sixes: 1, strikeRate: 113.33 },
      { name: 'Chris Woakes', runs: 14, balls: 16, fours: 2, sixes: 0, strikeRate: 87.50 },
      { name: 'Sam Curran', runs: 28, balls: 17, fours: 1, sixes: 3, strikeRate: 164.70 },
      { name: 'Adil Rashid', runs: 0, balls: 1, fours: 0, sixes: 0, strikeRate: 0 },
    ],
    bowlers: [
      { name: 'Wayne Parnell', overs: 10, maidens: 1, runs: 54, wickets: 1, economy: 5.40 },
      { name: 'Lungi Ngidi', overs: 9, maidens: 0, runs: 66, wickets: 1, economy: 7.33 },
      { name: 'Macro Jansen', overs: 10, maidens: 0, runs: 66, wickets: 1, economy: 6.60 },
      { name: 'Anrich Nortje', overs: 9, maidens: 1, runs: 64, wickets: 2, economy: 7.11 },
      { name: 'Keshav Maharaj', overs: 8, maidens: 0, runs: 51, wickets: 1, economy: 6.37 },
      { name: 'Aiden Markram', overs: 4, maidens: 0, runs: 26, wickets: 1, economy: 6.50 },
    ]
  };

  const southAfricanInnings = {
    team: 'South Africa',
    batters: [
      { name: 'Quinton de cock (wk)', runs: 31, balls: 28, fours: 4, sixes: 1, strikeRate: 110.71 },
      { name: 'Temba Bavuma', runs: 109, balls: 102, fours: 14, sixes: 1, strikeRate: 106.86 },
      { name: 'Rassie van der Dussen', runs: 38, balls: 38, fours: 3, sixes: 1, strikeRate: 100 },
      { name: 'Aiden Markram', runs: 49, balls: 43, fours: 3, sixes: 2, strikeRate: 113.95 },
      { name: 'Heinrich klaasen', runs: 27, balls: 19, fours: 3, sixes: 0, strikeRate: 142.10 },
      { name: 'David Miller', runs: 58, balls: 37, fours: 2, sixes: 3, strikeRate: 156.75 },
      { name: 'Marco Jansen', runs: 32, balls: 29, fours: 1, sixes: 1, strikeRate: 110.34 },
      
    ],
    bowlers: [
      { name: 'Chris Woakes', overs: 6.1, maidens: 0, runs: 60, wickets: 0, economy: 9.72 },
      { name: 'Reece Topley', overs: 9, maidens: 0, runs: 74, wickets: 0, economy: 8.22 },
      { name: 'Moeen Ali', overs: 4, maidens: 0, runs: 32, wickets: 0, economy: 8.00 },
      { name: 'Olly Stone', overs: 10, maidens: 1, runs: 48, wickets: 2, economy: 4.80 },
      { name: 'Sam Curran', overs: 10, maidens: 1, runs: 60, wickets: 1, economy: 6.00 },
      { name: 'Adil Rashid', overs: 10, maidens: 0, runs: 72, wickets: 2, economy: 7.20 },
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
      <p className='win'><strong>England</strong> won by 118 runs</p>
      <p className='win'>ENG :<span></span> 201-10</p><span></span>
      <p className='win'>RSA :<span></span> 83-10</p><span></span>
      {renderInnings(englandInnings)}
      {renderInnings(southAfricanInnings)}
    </div>
  );
}

export default Match;