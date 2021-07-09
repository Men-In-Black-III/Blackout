import React, { Component } from "react";
import { Button, Card, CardTitle, CardText } from "reactstrap";

class DrinkShow extends Component {
  render() {
    let { drinks } = this.props;
    console.log(this.props.drinks);
    return (
      <div>
        {drinks && (
          <Card body className="drink-name">
            <CardTitle tag="h5">This is a {drinks.drinkName}</CardTitle>
            <CardText>
              {" "}
              This is how you make it{drinks.drinkInstructions}{" "}
            </CardText>
            <CardText>
              {" "}
              This is what you're going to need {drinks.drinkIngredients}
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

export default DrinkShow;
