import React, { Component } from "react";
import { Button, Card, CardTitle, CardText } from "reactstrap";
import { Redirect } from "react-router-dom";
import "../../../assets/stylesheets/drinks.scss";

class DrinkShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleSubmit = (e) => {
    this.addToFavorites(this.props.drink);
  };

  postToFavorites = (favObj) => {
    return fetch("http://localhost:3000/drinks", {
      body: JSON.stringify(favObj),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        if (res.status === 422) {
          console.log("Please check your submission.");
        } else {
          this.setState({ redirect: true });
          return res.json();
        }
      })
      .catch((errors) => {
        console.log("create errors:", errors);
      });
  };

  addToFavorites = (drink) => {
    drink.drinkIngredients = drink.drinkIngredients.join("");
    const { drinkIngredients, drinkName, drinkInstructions, drinkThumb, _id } =
      drink;
    const favObj = {
      name: drinkName,
      img_url: drinkThumb,
      steps: drinkInstructions,
      ingredients: drinkIngredients,
      api_id: _id,
    };
    this.postToFavorites(favObj);
  };

  render() {
    let { drink } = this.props;
    const { logged_in } = this.props;
    return (
      <div>
        {drink && (
          <Card body className="drink-name">
            <CardTitle tag="h5">This is a {drink.drinkName}</CardTitle>
            <CardText>
              This is how you make it{drink.drinkInstructions}
            </CardText>
            <CardText>
              This is what you're going to need {drink.drinkIngredients}
            </CardText>
            <CardText>
              <img
                className="drinkImgs"
                src={drink.drinkThumb}
                alt="drink img"
              />
              {logged_in && (
                <Button onClick={this.handleSubmit}>Add To Favorites</Button>
              )}
            </CardText>
          </Card>
        )}
        {this.state.redirect && <Redirect to="/drinks_list" />}
      </div>
    );
  }
}

export default DrinkShow;
