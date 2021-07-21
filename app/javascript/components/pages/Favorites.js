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
    fetch(`https://localhost:3000/drinks`)
      .then((res) => res.json())
      .then((payload) => {
        this.setState({ favorites: payload });
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  deleteDrink = (id) => {
    fetch(`https://localhost:3000/favorite_drinks/${id}`, {
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
                <Col sm="4">
                  <Card body className="cardDecoration">
                    <CardTitle tag="h1" style={{color:'whitesmoke'}}>This is a {favorite.name}</CardTitle>
                    <br/>
                    <CardText style={{color:'whitesmoke'}}>
                      <h5>This is how you make it</h5> <br/>{favorite.steps}
                    </CardText>
                    <br/>
                    <CardText style={{color:'whitesmoke'}}>
                    <h5>This is what you're going to need</h5> <br/>{favorite.ingredients}
                    </CardText>
                    <br/>
                    <CardText style={{color:'whitesmoke'}}>
                      <img
                        className="drinkImgs"
                        src={favorite.img_url}
                        alt="drink img"
                        style={{width:"275px", height:'175px'}}
                      />
                    </CardText >
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
