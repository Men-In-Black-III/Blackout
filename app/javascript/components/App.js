import React from "react"
import DrinkIndex from "./pages/DrinkIndex"
import DrinkShow from "./pages/DrinkShow"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import CocktailOne from "./pages/CocktailOne"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <>
      <Router>
        <div>
      <Header component={ Header } />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/CocktailOne" component={ CocktailOne } />
          <Route path="/AboutUs" component={ AboutUs } />
          <Route path="/DrinkIndex" component={ DrinkIndex } />
          <Route path="/DrinkShow" component={ DrinkShow } />
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
