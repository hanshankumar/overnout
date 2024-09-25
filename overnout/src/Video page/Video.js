import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Video() {
  return (
    <div className="container mt-5">
      <h1 className="text-left mb-4">Best Shots</h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card"  style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/3yiWqnKl7lQ?si=BIS_oKOJ4lxXyiq7" 
                allowFullScreen
                title="Video 1"
              ></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title" >Epic Montage T20 World 2024</h5>
              <p className="card-text" style={{color:'#3A6D8C'}}>The epic montage of the heart-stopping second innings of the 2024 #T20 WorldCup Final between India and South Africa</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card"  style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/pQ5xEiZ-5IE?si=lECN_UNV5YhKl4y5" 
                allowFullScreen
                title="Video 2"
              ></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title">Cricket World Cup 2019 Final: England vs New Zealand </h5>
              <p className="card-text" style={{color:'#3A6D8C'}}>Relive the thrilling 2019 Cricket World Cup Final where England blow New Zealand</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card"  style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/qAf1mzocy74?si=WoZj-VW01_WVeAxR" 
                allowFullScreen
                title="Video 2"
              ></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title" >Yuvraj's match-winning six</h5>
              <p className="card-text" style={{color:'#3A6D8C'}}>Yuvraj Singh sealed India's place in the #CT17 semi-finals with a giant six over mid-wicket, 
                and it was voted the Nissan Play of the Day!</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-left mb-4">Press Conferences</h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card"  style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/sgC5IpWKJNg?si=JMHOQ1gXQ3nu-3Ru"  
                allowFullScreen
                title="Video 1"
              ></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title">MS Dhoni: the final press conference</h5>
              <p className="card-text" style={{color:'#3A6D8C'}}>India captain Mahendra Singh Dhoni has his final chat with the media at the conclusion of the third Test in Melbourne, 
                but gives nothing away about his shock retirement</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card"  style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/gnk6tcS46Cc?si=q5h9CAKBstInuv9w"
                allowFullScreen
                title="Video 2"
              ></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title" >Virat Kohli Sarfraz Funny Moment at World Cup 2019 Press Conference</h5>
              <p className="card-text"style={{color:'#3A6D8C'}} >Watch the hilarious exchange between Virat Kohli and Sarfraz Ahmed during the World Cup 2019 press conference</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card"  style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/9yrWkbuz-RA?si=76r-LSqFsI4BSbYw" 
                allowFullScreen
                title="Video 2"
              ></iframe>
            </div>
            <div className="card-body">
              <h5 className="card-title">Aiden Markram post-match press conference SA vs IND T20 2024</h5>
              <p className="card-text" style={{color:'#3A6D8C'}}>Aiden Markram discusses the thrilling T20 match against India in 2024, reflecting on key moments, team performance, and his personal contributions to the game</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Video;
