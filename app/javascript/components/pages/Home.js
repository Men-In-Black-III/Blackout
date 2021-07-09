import React, { Component} from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  NavLink,
} from "reactstrap";

class Home extends Component {
  render() {
    let { drinks } = this.props;
    console.log({drinks})
    return (
      <div className="main-body">
        <h2>Cocktails</h2>
        <div className="home-cards">
          {drinks &&
            drinks.map((drink) => {
              return (
                <Row key={drink._id}>
                  <Col sm="6">
                    <Card body>
                      <NavLink to="/AboutUs">
                        <CardTitle tag="h5">Cocktail {drink.drinkName}</CardTitle>
                      </NavLink>
                      <NavLink to="/AboutUs">
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
