import React, { Component } from "react";
import { CardText, Card, CardTitle, Row, Col } from "reactstrap";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }

  handleSubmit=(e) => {
    this.props.deleteFavorites(this.props.drink)
  }

  componentDidMount() {
    this.readFavorites();
  }

  readFavorites = () => {
    fetch(`http://localhost:3000/drinks`)
      .then((res) => res.json())
      .then((payload) => {
        this.setState({ favorites: payload });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  render() {
    console.log(this.state.favorites);
    return (
      <div>
        {this.state.favorites &&
          this.state.favorites.map((favorite, index) => {
            console.log({ favorite });
            return (
              <Row key={index}>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">This is a {favorite.name}</CardTitle>
                    <CardText>
                      {" "}
                      This is how you make it{favorite.instructions}{" "}
                    </CardText>
                    <CardText>
                      {" "}
                      This is what you're going to need {favorite.ingredients}
                    </CardText>
                    <CardText>
                      {" "}
                      <img
                        className="drinkImgs"
                        src={favorite.img_url}
                        alt="drink img"
                      />
                    </CardText>
                  </Card>
                </Col>
              </Row>
            );
          })}
      </div>
    );
  }
}
