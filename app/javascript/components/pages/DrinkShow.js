import React, { Component } from "react";
import { Button, Card, CardTitle, CardText } from "reactstrap";
import '../../../assets/stylesheets/drinks.scss'
class DrinkShow extends Component {



  handleSubmit=(e) => {
    this.props.addToFavorites(this.props.drink)
    this.setState({redirectToReferrer:true})
  }

  render() {
    let { drink } = this.props;
    // console.log(this.props.drink);
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
            <CardText >
              
              <img className = "drinkImgs"
             src= {drink.drinkThumb}
             alt = "drink img"
             />
             <Button onClick={this.handleSubmit}>Add To Favorites</Button>
            </CardText>
          </Card>
        )}
      </div>
    );
  }
}

export default DrinkShow;
