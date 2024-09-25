import React from 'react';
import "./News.css";
import slide1 from'../images/News/slide1.webp';
import slide2 from'../images/News/slide2.jpg';

import slide31 from'../images/News/slide31.jpg';
import latestnews from '../images/News/latestnews.avif';
import latestnew2 from'../images/News/latestnew2.jpg';
import latestnews3 from'../images/News/latestnews3.avif';
import latestnews4 from'../images/News/latestnews4.webp';
import morenews1 from'../images/News/morenews1.webp';
import morenews2 from'../images/News/morenews2.webp';
import morenews3 from '../images/News/morenews3.jpg';
import morenews4 from'../images/News/morenews4.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
  return (
    <div>
     <div>
  <div id="carouselExampleDark" className="carousel carousel-dark slide highlights1 custom-carousel" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src={slide1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Australia Hosts</h5>
          <p>MCG to celebrate 150 years of Test Cricket</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={slide2} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Chairman</h5>
          <p>Mr. Jay Shah on being elected unopposed as Independent Chair of International Cricket Council (ICC)</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={slide31} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>Supermacy</h5>
          <p>Local boy R Ashwin gave it a whack in Chennai</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

      <h1 className='heading'>Latest News</h1>
      <div className="d-flex flex-wrap justify-content-around card-container" >
        {[
          {
            img: latestnews,
            text: "England vs Australia abandoned: Third T20 international – as it happened.",
            link:"https://www.aljazeera.com/sports/liveblog/2024/9/15/live-england-vs-australia-third-t20-international-cricket-match",
          },

          {
            img: latestnew2,
            text: "Australia Name Fit Again Darcie Brown In T20 World Cup Squad, Jess Jonassen Misses Out",
            link:"https://sports.ndtv.com/cricket/australia-name-fit-again-darcie-brown-in-t20-world-cup-squad-jess-jonassen-misses-out-6419460",
          },

          {
            img: latestnews3,
            text: "Afghanistan register historic first-ever bilateral series victory over South Africa",
            link:"https://cricketaddictor.com/cricket-news/afghanistan-register-historic-first-ever-bilateral-series-victory-over-south-africa/",
          },
          {
            img: latestnews4,
            text: "When is the next Ashes series? Dates, locations and venues",
            link:"https://www.radiotimes.com/tv/sport/cricket/the-ashes-next-date/",
          },
          
        ].map((item, index) => (
          <div className="card nn m-2"  style={{ width: "250px", backgroundColor: "#3A6D8C", }}  key={index}>
            <img className="card-img-top  img-fluid" src={item.img} alt="Card image cap" />
            <div className="card-body " style={{ color: "#343a40" }}>
              <p className=" newsh" style={{color:"white"}}>{item.text}</p>
              <a href={item.link} target="_blank" className="newsh1" rel="noopener noreferrer" >More Info</a>
            </div>
          </div>
        ))}
             
      </div>

      <h1 className='heading1'>More News</h1>

      <div className="d-flex flex-wrap justify-content-around card-container" >
        {[
          {
            img: morenews1,
            text: "MCG to host one-off Test between Australia and England to celebrate 150 years of Test cricket",
            link:"https://indianexpress.com/article/sports/cricket/mcg-to-host-one-off-test-between-australia-and-england-to-celebrate-150-years-of-test-cricket-9520440/",
          },

          {
            img: morenews2,
            text: "1st Test: Ground conditions, stats, records, toss factor in Chennai ahead of India v Bangladesh",
            link:"https://sportstar.thehindu.com/cricket/ind-vs-ban-pitch-report-chennai-conditions-stats-records-batting-bowling-toss-factor-highest-lowest-scores-india-bangladesh/article68657745.ece",
           
          },

          {
            img: morenews3,
            text: "Not a single ball has been bowled across four days with the wet outfield preventing any action on the two days",
            link:"https://www.thehindu.com/sport/cricket/afghanistan-vs-new-zealand-test-day-4-abandoned-due-to-rain-as-one-off-noida-test-faces-complete-washout/article68632974.ece",
          },
          {
            img: morenews4,
            text: "Rishabh Pant is back - celebrating life, loving cricket",
            link:"https://www.espncricinfo.com/story/ipl-2024-rishabh-pant-is-back-celebrating-life-loving-cricket-1425835",
            
          },
          
        ].map((item, index) => (
          <div className="card nn m-2"  style={{ width: "250px", backgroundColor: "#3A6D8C", }}  key={index}>
            <img className="card-img-top img-fluid" src={item.img} alt="Card image cap" />
            <div className="card-body" style={{ color: "#343a40" }}>
              <p className="newsh" style={{color:"white"}}>{item.text}</p>
              <a href={item.link} target="_blank" className="newsh1" rel="noopener noreferrer">More Info</a>
            </div>
          </div>
        ))}
   
      </div>

    </div>
    
  );
}

export default News;