import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <div>
        <Container>

<Row>

  <Col md={3} className="mt-4">
    
  <Card >
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
      <Card.Body>
        <Card.Title>Restuarant 1</Card.Title>
        <Card.Text>
          Description Restuarant 1
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
  </Card>
  </Col>
  <Col md={3} className="mt-4">
  <Card >
<Card.Img variant="top" src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
<Card.Body>
<Card.Title>Restuarant 2</Card.Title>
<Card.Text>
Description Restuarant 2
</Card.Text>
<Button variant="primary">More Details</Button>
</Card.Body>
</Card>
  </Col>
  <Col md={3} className="mt-4">
  <Card >
<Card.Img variant="top" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=pexels-pixabay-262978.jpg&fm=jpg" />
<Card.Body>
<Card.Title>Restuarant 3</Card.Title>
<Card.Text>
  Description Restuarant 3
</Card.Text>
<Button variant="primary">More Details</Button>
</Card.Body>
</Card>
  </Col>
  <Col md={3} className="mt-4">
  <Card >
<Card.Img variant="top" src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=612x612&w=0&k=20&c=kzlrX7KJivvufQx9mLd-gMiMHR6lC2cgX009k9XO6VA=" />
<Card.Body>
<Card.Title>Restuarant 4</Card.Title>
<Card.Text>
  Description Restuarant 4
</Card.Text>
<Button variant="primary">More Details</Button>
</Card.Body>
</Card>
  </Col>
  <Col md={3} className="mt-4">
  <Card >
<Card.Img variant="top" src="https://thumbs.dreamstime.com/b/cozy-restaurant-tables-ready-dinner-39875776.jpg" />
<Card.Body>
<Card.Title>Restuarant 5</Card.Title>
<Card.Text>
  Description Restuarant 5
</Card.Text>
<Button variant="primary">More Details</Button>
</Card.Body>
</Card>
  </Col>
  <Col md={3} className="mt-4">
  <Card >
<Card.Img variant="top" src="https://img.rawpixel.com/private/static/images/website/2022-05/upwk61661577-wikimedia-image-kowapeej.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=14769aec7c86811c0c7e4eb29fa4a76e" />
<Card.Body>
<Card.Title>Restuarant 6</Card.Title>
<Card.Text>
  Description Restuarant 6
</Card.Text>
<Button variant="primary">More Details</Button>
</Card.Body>
</Card>
  </Col>
  <Col md={3} className="mt-4">
  <Card >
<Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg" />
<Card.Body>
<Card.Title>Restuarant 7</Card.Title>
<Card.Text>
  Description Restuarant 7
</Card.Text>
<Button variant="primary">More Details</Button>
</Card.Body>
</Card>
  </Col>
  <Col md={3} className="mt-4">
  <Card >
<Card.Img variant="top" src="https://static.toiimg.com/photo/57867312/.jpg" />
<Card.Body>
<Card.Title>Restuarant 8</Card.Title>
<Card.Text>
  Description Restuarant 8
</Card.Text>
<Button variant="primary">More Details</Button>
</Card.Body>
</Card>
  </Col>
  
</Row>
        </Container>
    </div>
  )
}

export default Home