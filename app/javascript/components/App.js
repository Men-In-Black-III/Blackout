import React from "react"
import DrinkShow from "./pages/DrinkShow"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Favorites from "./pages/Favorites"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      drinks: [],
      redirectToReferrer:false

    }
  }

  componentDidMount(){
    this.readDrinks()
  }

  readDrinks = () => {
    fetch("http://cocktail-recipes-tully4school.herokuapp.com/drinks")
    .then(response => {
      return response.json()
    })
    .then(drinksArray => {
      this.setState({ drinks: drinksArray})
    })
    .catch(errors => {
      console.log("drinks read fetch errors", errors)
    })
  }

  
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
          return res.json();
        }
      })
      .catch((errors) => {
        console.log("create errors:", errors);
      });
  };

  addToFavorites = (drink) => {
    drink.drinkIngredients = drink.drinkIngredients.join("")
    const {drinkIngredients, drinkName, drinkInstructions, drinkThumb, _id} = drink    
    const favObj = { 
      name:drinkName,
      img_url:drinkThumb,
      steps:drinkInstructions,
      ingredients:drinkIngredients,
      api_id:_id
    }
    this.postToFavorites(favObj)

    }

    // deleteDrink = (id) => {
    //   fetch(`http://localhost:3000/drinks_list/${id}`, {
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   method: "DELETE"
    // })
    // .then(response => {
    //   return response.json()
    // })
    // .then(payload => {
    //   return this.readDrinks()
    // })
    // .catch(errors => {
    //   console.log("delete errors:", errors)
    // })
    // }

  render () {
    const {
      logged_in,
      current_user
    } = this.props
    const { drinks } = this.state
    return (

      <>
      <Router>
        <div>
      <Header component={ Header }
      logged_in = {logged_in}
      current_user = {current_user}
       />
        <Switch>
          <Route exact path="/" render= { (props) => <Home drinks = {drinks}/> } />
          <Route path="/AboutUs" component={ AboutUs } />
          <Route path="/DrinkShow/:id" render= {(props) => {
          let id = props.match.params.id
          let drink = this.state.drinks.find(drinks => drinks._id === id)
          console.log(this.state);
          console.log({id});
          console.log({drink});
          return <DrinkShow drink = {drink} addToFavorites = {this.addToFavorites}/>
        }} />
          <Route path="/drinks_list" component= { Favorites }/>
          <Route path="/NotFound" component={ NotFound } />
          
        </Switch>
        <Footer component={ Footer } />
        </div>
      </Router>
      </>
    );
  }
}

export default App
