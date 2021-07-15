import React, { Component} from "react";
import {
  Card,
  Button,
  CardTitle,
  Row,
  Col,
  NavLink,
} from "reactstrap";

class Home extends Component {
  render() {
    let { drinks } = this.props;
    //deconstruct ^
    // console.log(this.props.state)
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
                      <NavLink href={`/DrinkShow/${drink._id}`}>
                        <CardTitle tag="h5">Cocktail {drink.drinkName}</CardTitle>
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
