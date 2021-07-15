import React, { Component } from "react";
import { Button, Card, CardTitle, CardText } from "reactstrap";
import { Redirect } from "react-router-dom";
import '../../../assets/stylesheets/drinks.scss'


class DrinkShow extends Component {
constructor(props){
  super(props);
  this.state={
    redirect: false
  }
}

  handleSubmit=(e) => {
  
    this.props.addToFavorites(this.props.drink)
    this.setState({redirect:true})
  }

  

  render() {
    let { drink } = this.props;
   const {logged_in} = this.props 
   console.log(this.state.redirect)
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
             {
               logged_in ? logged_in &&   <Button onClick={this.handleSubmit}>Add To Favorites</Button>
               :null
             }
            </CardText>
          </Card>
        )}
        {this.state.redirect && <Redirect to="/drinks_list" />}
      </div>
    );
  }
}

export default DrinkShow;
