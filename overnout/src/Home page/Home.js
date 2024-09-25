import React from 'react';
import './Home.css'
import { Carousel ,Card,Row,Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import h1 from '../images/highlight1.jpg';
import h2 from '../images/highlight2.jpg';
import h3 from '../images/highlight3.jpg';
import t1 from '../images/trophy2.jpg';
import t2 from '../images/News/trophy2.webp'
import t3 from '../images/trophy3.jpg'

const cricketHighlights = [
  {
    image: h1,
    title: "Proud moment of 2024",
    description: "India wins the 2024 T20 World Cup final, clinching the title in a thrilling showdown!"
  },
  {
    image: h2,
    title: "Champions Trophy 2025",
    description: "The ICC Champions Trophy 2025 will mark Pakistan's first time hosting an ICC tournament in over two decades, a significant moment for international cricket in the country."
  },
  {
    image: h3,
    title: "MS Dhoni's Helicopter Shot",
    description: "MS Dhoni's helicopter shot is a powerful, wrist-driven stroke that sends yorkers soaring over mid-wicket with a signature circular bat swing."
  }
];

const matches = [
    {
      id: 1,
      title: "India vs SouthAfrica",
      description: "T20 World Cup 2024",
      venue: "Kensington Oval, Barbados",
      time: "Jun 29, 10:30 AM LOCAL"
    },
    {
      id: 2,
      title: "England vs South Africa",
      description: "ODI Series 24",
      venue: "Old Trafford, Manchester",
      time: "Jun 21,09:00 AM GMT"
    },
    {
      id: 3,
      title: "New Zealand vs West Indies",
      description: "Test Match 20",
      venue: " Basin Reserve, Wellington",
      time: "Jan 29, 11:00 AM LOCAL"
    }
  ];
  

function Home() {
    const navigate = useNavigate();

    const handleCardClick = (matchId) => {
      navigate(`/match/${matchId}`);
    };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <Carousel 
            prevLabel="Previous"
            nextLabel="Next"
            prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />}
            nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}
          >
            {cricketHighlights.map((highlight, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={highlight.image}
                  alt={`Cricket Highlight ${index + 1}`}
                  style={{ height: '450px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <br></br>
      <div className='row mt-5'>
        <h1>Matches</h1>
      </div>
      <Row xs={1} xl={3} className="g-4 mt-4">
        {matches.map((match) => (
          <Col key={match.id}>
            <Card 
              onClick={() => handleCardClick(match.id)}
              style={{ 
                cursor: 'pointer',
                height: '200px', 
                display: 'flex',
                flexDirection: 'column' ,
                backgroundColor: '#3A6D8C', 
                color: 'white' 
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
              <Card.Body className="d-flex flex-column  justify-content-center align-items-center text-center">
                <Card.Title className="flex-grow-0">{match.title}</Card.Title>
                <Card.Text className="flex-grow-1 d-flex align-items-center">
                  {match.description}
                </Card.Text>
                <Card.Text><strong>Venue:</strong> {match.venue}</Card.Text>
               <Card.Text><strong>Time:</strong> {match.time}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br></br>
      <h1>Honours</h1>
      <br></br>
      <Row>
      <div className="card" style={{ width: '410px',height: '500px',marginRight: '20px' }}>
      <img className="card-img-top" src={t1}  alt="Card image cap" style={{ height: '400px', objectFit: 'cover', width: '100%',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}/>
      <div className="card-body">
        <p className="card-text" style={{color:'#3A6D8C'}}>ICC Men's Cricket World Cup 2023</p>
      </div>
    </div>
    <div className="card" style={{ width: '410px',height: '500px',marginRight: '20px'}}>
      <img className="card-img-top" src={t2}  alt="Card image cap" style={{ height: '400px', objectFit: 'cover', width: '100%',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}/>
      <div className="card-body">
        <p className="card-text" style={{color:'#3A6D8C'}}>T20 World Cup 2020</p>
      </div>
    </div>
    <div className="card" style={{ width: '410px',height: '500px'}}>
      <img className="card-img-top" src={t3}  alt="Card image cap" style={{ height: '400px', objectFit: 'cover', width: '100%',boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}/>
      <div className="card-body">
        <p className="card-text" style={{color:'#3A6D8C'}}>Champions Trophy 2017</p>
      </div>
    </div>
    </Row>

    </div>
  );
}

export default Home;