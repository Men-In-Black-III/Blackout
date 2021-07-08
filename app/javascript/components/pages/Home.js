import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col, NavLink } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Cocktail One</CardTitle>
            <CardText>
              Insert image here
            </CardText>
            <NavLink href="pages/CocktailOne"><Button>View CocktailOne</Button></NavLink>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle tag="h5">Cocktail Two</CardTitle>
            <CardText>
            Insert image here
            </CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
      <a href="#">View More</a>
    </div>
  );
};

export default Home;
