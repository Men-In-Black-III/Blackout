import React from "react"
import DrinkIndex from "./pages/DrinkIndex"
import DrinkShow from "./pages/DrinkShow"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
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
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="./pages/DrinkIndex" component={ DrinkIndex } />
          <Router exact path="./pages/DrinkShow" component={ DrinkShow } />
        </Switch>
      </Router>
      </>
    );
  }
}

export default App
