import React from "react";
import DrinkShow from "./pages/DrinkShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentDidMount() {
    this.readDrinks();
  }

  readDrinks = () => {
    fetch("http://cocktail-recipes-tully4school.herokuapp.com/drinks")
      .then((response) => {
        return response.json();
      })
      .then((drinksArray) => {
        this.setState({ drinks: drinksArray });
      })
      .catch((errors) => {
        console.log("drinks read fetch errors", errors);
      });
  };



  render() {
    const { logged_in, current_user } = this.props;
    const { drinks } = this.state;
    return (
      <>
        <Router>
          <div className="backgroundImage">
            <Header
              component={Header}
              logged_in={logged_in}
              current_user={current_user}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Home drinks={drinks} />}
              />
              <Route path="/AboutUs" component={AboutUs} />
              <Route
                path="/DrinkShow/:id"
                render={(props) => {
                  let id = props.match.params.id;
                  let drink = this.state.drinks.find(
                    (drinks) => drinks._id === id
                  );
                  return (
                    <DrinkShow
                      drink={drink}
                      logged_in={logged_in}
                    />
                  );
                }}
              />
              <Route path="/drinks_list" component={Favorites} deleteDrink ={this.deleteDrink} />
              <Route path="/NotFound" component={NotFound} />
            </Switch>
            <Footer component={Footer} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
