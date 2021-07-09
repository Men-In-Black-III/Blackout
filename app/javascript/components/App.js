import React from "react"
import DrinkIndex from "./pages/DrinkIndex"
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
      drinks: []
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
  render () {
    // console.log(this.state)
    const { drinks } = this.state
    return (

      <>
      <Router>
        <div>
      <Header component={ Header } />
        <Switch>
          <Route exact path="/" render= { (props) => <Home drinks = {drinks}/> } />
          <Route path="/AboutUs" component={ AboutUs } />
          <Route path="/DrinkIndex" component={ DrinkIndex } />
          <Route path="/DrinkShow/:id" render= {(props) => {
          let id = props.match.params.id
          console.log(id)
          let drink = this.state.drinks.find(drinks => drinks._id === id)
          return <DrinkShow drinks = {drink}/>
        }} />
          <Route path="/NotFound" component={ NotFound } />
          <Route path="/Favorites" component= { Favorites }/>
        </Switch>
        <Footer component={ Footer } />
        </div>
      </Router>
      </>
    );
  }
}

export default App
