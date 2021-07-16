import React, { Component } from "react";
import { CardText, Card, CardTitle, Row, Col, Button } from "reactstrap";

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    };
  }
  componentDidMount() {
    this.readFavorites();
  }

  handleSubmit = (e, id) => {
    this.deleteDrink(id);
  };

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

  deleteDrink = (id) => {
    fetch(`http://localhost:3000/favorite_drinks/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        return this.readFavorites();
      })
      .catch((errors) => {
      console.log("delete errors:", errors);
      });
  };

  render() {
    return (
      <div>
        {this.state.favorites &&
          this.state.favorites.map((favorite, index) => {
            console.log({ favorite });
            return (
              <Row key={favorite.id}>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">This is a {favorite.name}</CardTitle>
                    <CardText>
                      This is how you make it {favorite.steps}
                    </CardText>
                    <br/>
                    <CardText>
                      This is what you're going to need {favorite.ingredients}
                    </CardText>
                    <br/>
                    <CardText>
                      <img
                        className="drinkImgs"
                        src={favorite.img_url}
                        alt="drink img"
                      />
                    </CardText>
                    <Button onClick={(e) => this.handleSubmit(e, favorite.id)}>
                      Delete favorite
                    </Button>
                  </Card>
                </Col>
              </Row>
            );
          })}
      </div>
    );
  }
}
