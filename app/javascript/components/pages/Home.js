import React, { Component } from "react";
import { Card, Button, CardTitle, Row, Col, NavLink,Container } from "reactstrap";
import "../../../assets/stylesheets/home.scss";
class Home extends Component {
  render() {
    let { drinks } = this.props;
    return (
      <div className="main-body">
        <h2>Cocktails</h2>
        <Container>
          <Row>
          {drinks &&
            drinks.map((drink) => {
              return (
                  <Col key={drink._id} sm="4" className="mb-2">
                    <Card body className="home-cards">
                      <NavLink href={`/DrinkShow/${drink._id}`}>
                        <CardTitle tag="h5">
                          Cocktail {drink.drinkName}
                        </CardTitle>
                      </NavLink>
                      <NavLink href={`/DrinkShow/${drink._id}`}>
                        <Button>Show More</Button>
                      </NavLink>
                    </Card>
                  </Col>
              );
            })}
            </Row>
        </Container>

      </div>
    );
  }
}

export default Home;
