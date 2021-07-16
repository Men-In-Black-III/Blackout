import React, { Component } from "react";
import { Card, Button, CardTitle, Row, Col, NavLink } from "reactstrap";
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
    console.log(this.state.count)
    return (
      <div className="main-body">
        <h2>Cocktails</h2>
        <div>
          {drinks &&
            drinks.slice(0, this.state.count).map((drink) => {
              return (
                <Row key={drink._id}>
                  <Col sm="6">
                    <Card body className="home-cards">
                      <NavLink href={`/DrinkShow/${drink._id}`}>
                        <CardTitle tag="h5">
                          Cocktail {drink.drinkName}
                        </CardTitle>
                        <img 
                        style={{width:"100px", height:"100px"}}
                        src={drink.drinkThumb}
                        alt="drink img"
                        />
                      </NavLink>
                      <NavLink href={`/DrinkShow/${drink._id}`}>
                        <Button>Show More</Button>
                      </NavLink>
                    </Card>
                  </Col>
                </Row>
              );
            })}
        </div>
        <Button color = "primary" onClick={this.loadMore}>Load More</Button>
      </div>
    );
  }
}

export default Home;
