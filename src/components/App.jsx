import React, { Component } from 'react';
import FilmCard from './FilmCard';
import PeopleCard from './PeopleCard';
import './studio-ghibli-logo.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            people: [],
            loadFilms: false,
            loadPeople: false
        }
    }

    componentDidMountFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(error => alert(error))
    }

    componentDidMountPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(error => alert(error))
    }

    // renderNewArray() {
    //     let newArray = this.state.films.map((film, i) => {
    //         return <Card key={i} title={film.title} description={film.description} />
    //     })
    //     return newArray;
    // }

    toggleLoadFilms() {
        this.setState({ loadFilms: true })
    }

    toggleLoadPeople() {
        this.setState({ loadPeople: true })
    }

    render() {                                                              //Need to fix logo below
        if (this.state.loadFilms === false) {
            return (
                <main className="App">
                    <header className="App-header d-flex m-2 justify-content-center">
                        <h1>Reacting to APIs</h1>
                    </header>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src={require("../studio-ghibli-logo.svg")} height="100" width="100" alt="Ghibli Logo" />
                        </div>
                        <div className="flex-row">
                            <button
                                className="button m-3 shadow"
                                onClick={e => this.toggleLoadFilms(e)}              //e.target.value?
                            >Load Films</button>
                            <button
                                className="button m-3 shadow"
                                onClick={e => this.toggleLoadPeople(e)}              //e.target.value?
                            >Load People</button>
                        </div>
                    </div>
                    <section className="container">
                        <div className="row m-2">


                        </div>
                    </section>
                </main>
            )
        } else if (this.state.loadFilms === true) {
            return (
                <main className="App">
                    <header className="App-header d-flex m-2 justify-content-center">
                        <h1>Reacting to APIs</h1>
                    </header>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src={require("../studio-ghibli-logo.svg")} height="100" width="100" alt="Ghibli Logo" />
                        </div>
                        <div className="flex-row">
                            <button
                                className="button m-3 shadow"
                                onClick={e => this.toggleLoadFilms(e)}              //e.target.value?
                            >Load Films</button>
                            <button
                                className="button m-3 shadow"
                                onClick={e => this.toggleLoadPeople(e)}              //e.target.value?
                            >Load People</button>
                        </div>
                    </div>
                    <section className="container">
                        <div className="row m-2">
                            {this.state.films.map((film, i) => {
                                return <FilmCard key={i} title={film.title} description={film.description} />
                            })}
                        </div>
                    </section>
                </main>

            )
        } else if (this.state.loadPeople === true) {
            return (
                <main className="App">
                    <header className="App-header d-flex m-2 justify-content-center">
                        <h1>Reacting to APIs</h1>
                    </header>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img src={require("../studio-ghibli-logo.svg")} height="100" width="100" alt="Ghibli Logo" />
                        </div>
                        <div className="flex-row">
                            <button
                                className="button m-3 shadow"
                                onClick={e => this.toggleLoadFilms(e)}              //e.target.value?
                            >Load Films</button>
                            <button
                                className="button m-3 shadow"
                                onClick={e => this.toggleLoadPeople(e)}              //e.target.value?
                            >Load People</button>
                        </div>
                    </div>
                    <section className="container">
                        <div className="row m-2">
                            {this.state.people.map((person, i) => {
                                return <PeopleCard key={i} Name={person.name} Age={person.age} />
                            })}
                        </div>
                    </section>
                </main>
            )
        }
    }
}


export default App;