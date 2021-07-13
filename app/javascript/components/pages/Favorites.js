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
        console.log(this.state.favorites);
        return (
            <div>
                <h2>Favorites List</h2>


            </div>
        )
    }
}


