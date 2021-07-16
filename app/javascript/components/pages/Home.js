import React, { Component } from "react";
import { Card, Button, CardTitle, Row, Col, NavLink,Container } from "reactstrap";
import "../../../assets/stylesheets/home.scss";
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:3,
    }
  }

  loadMore = () => {
    this.setState(prev => ({ count: prev.count + 3 }));
  }
  render() {
    let { drinks } = this.props;
    return (
      <div className="main-body">
        <h2>Cocktails</h2>
        <Container>
          <Row>
          {drinks &&
            drinks.slice(0, this.state.count).map((drink) => {
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
        <Button color = "primary" onClick={this.loadMore}>Load More</Button>   
      </div>
    );
  }
}

export default Home;
