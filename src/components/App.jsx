import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import 'es6-promise';    //Wouldn't compile; caused errors
import Card from './Card';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            films: [],
            display: false
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(error => alert(error))
    }

    renderNewArray() {
        let newArray = this.state.films.map((film, i) => {
            return <Card key={i} title={film.title} description={film.description} />
        })
        return newArray;
    }

    handleClick() {
        return this.setState({ display: this.newArray })
    }

    render() {

        return (
            <div className="App">
                <header className="App-header d-flex m-2 justify-content-center">
                    <h1>Reacting to APIs</h1>
                </header>
                <div className="row d-flex justify-content-center">
                    <button
                        className="button m-5 shadow"
                        onClick={e => this.handleClick(e)}  //e.target.value?
                    >Load Films</button>
                </div>
                <section className="container">
                    <div className="row m-2">
                        {this.state.films.display}
                    </div>
                </section>
            </div>
        )
    }
}


export default App;