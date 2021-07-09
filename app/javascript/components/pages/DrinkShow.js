import React, {Component} from "react";
import { Button, Card, CardTitle,CardText } from "reactstrap"

class DrinkShow extends Component{
    render() {
        let { drink } = this.props
        console.log(drink)
        return(
            <div className ="main-body">
                {drink && 
                <Card body className="drink-name"><CardTitle tag="h5">This is a {drink.drinkName}</CardTitle>
                <CardText> This is how you make it{drink.drinkInstructions} </CardText>
                <CardText> This is what you're going to need {drink.drinkIngredients}</CardText>
                {/* <NavLink to= */}
                    
                    
                    
                    
                    
                    
                    </Card>}




            </div>
        )
    }
}

export default DrinkShow;
