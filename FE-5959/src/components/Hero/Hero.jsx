import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardComponent from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFolder, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  const cards = [
    { title: "Fresh new layout", text: "With Bootstrap 5, we've created a fresh new layout for this template!", icon: <FontAwesomeIcon icon={faFolder} size="2x" /> },
    { title: "Free to download", text: "As always, Start Bootstrap has a powerful collectin of free templates.", icon: <FontAwesomeIcon icon={faDownload} size="2x" /> },
    { title: "Jumbotron hero header", text: "The heroic part of this template is the jumbotron hero header!", icon: <FontAwesomeIcon icon={faDownload} size="2x" /> },
    { title: "Feature boxes", text: "We've created some custom feature boxes using Bootstrap icons!", icon: <FontAwesomeIcon icon={faDownload} size="2x" /> },
    { title: "Simple clean code", text: "We keep our dependencies up to date and squash bugs as they come!", icon: <FontAwesomeIcon icon={faDownload} size="2x" /> },
    { title: "A name you trust", text: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!", icon: <FontAwesomeIcon icon={faCircleCheck} size="2x" /> }
  ];

  return (
    <div>
      <Container className="text-center p-3 bg-light my-5">
        <div className='py-5'>
          <h1>Card Title</h1>
          <Card.Text className='fs-3 text-center py-3'>
            Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
          </Card.Text>
          <Button variant="primary" className='fs-4'>Go somewhere</Button>
        </div>
      </Container>

      <div className="container mt-5 mb-5">
        <Row>
          {cards.map((card, index) => (
            <Col key={index} xs={12} md={6} lg={6} xl={4} className="mb-4">
              <CardComponent title={card.title} text={card.text} icon={card.icon} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Hero;
