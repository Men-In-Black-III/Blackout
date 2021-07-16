import React, { Component } from "react";
import { Card, Button, CardTitle, Row, Col, NavLink } from "reactstrap";
import "../../../assets/stylesheets/home.scss";
class Home extends Component {
  render() {
    let { drinks } = this.props;
    return (
      <div className="main-body">
        <h2>Cocktails</h2>
        <div>
          {drinks &&
            drinks.map((drink) => {
              return (
                <Row key={drink._id}>
                  <Col sm="6">
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
                </Row>
              );
            })}
          <a href="#">View More</a>
        </div>
      </div>
    );
  }
}

export default Home;
