import React, { Component } from 'react'

export default class Favorites extends Component {

    constructor(props) {
        super(props)
            this.state = {
                favorites: [],
            };
    }

    componentDidMount() {
        this.readFavorites()
    }

    readFavorites = () => {
        fetch(`http://localhost:3000/drinks`)
        .then((res) => res.json())
        .then((payload) => {
           this.setState({favorites: payload});
        })
        .catch((errors) => {
            console.log(errors);
        })
    }



    render() {
        console.log(this.state.favorites)
        return (
            <div>
                          {this.state.favorites &&
            this.state.favorites.map((favorite) => {
              return (
                <Row key={favorite.id}>
                  <Col sm="6">
                    <Card body>
                      <NavLink href={`/DrinkShow/${favorite.id}`}>
                        <CardTitle tag="h5">Cocktail {favorite.drinkName}</CardTitle>
                      </NavLink>
                      <NavLink href={`/DrinkShow/${favorite.id}`}>
                        <Button>Show More</Button>
                      </NavLink>
                    </Card>
                  </Col>
                </Row>
              );
            })}
            </div>
        )
    }
}


