import React, { Component } from 'react';
import FilmList from './FilmList';
import './studio-ghibli-logo.svg';
import PeopleList from './PeopleList';
import Header from './Header';

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
                    <Header />
                    <div className="row justify-content-center">
                        <button
                            className="button m-3 shadow"
                            onClick={e => this.toggleLoadFilms(e)}              //e.target.value?
                        >Load Films</button>
                        <button
                            className="button m-3 shadow"
                            onClick={e => this.toggleLoadPeople(e)}              //e.target.value?
                        >Load People</button>
                    </div>
                </main>
            )
        } else if (this.state.loadFilms === true) {
            return (
                <main className="App">
                    <Header />
                    <div className="row justify-content-center">
                        <button
                            className="button m-3 shadow"
                            onClick={e => this.toggleLoadFilms(e)}              //e.target.value?
                        >Load Films</button>
                        <button
                            className="button m-3 shadow"
                            onClick={e => this.toggleLoadPeople(e)}              //e.target.value?
                        >Load People</button>
                    </div>
                    <FilmList />
                </main>
            )
        } else if (this.state.loadPeople === true) {
            return (
                <main className="App">
                    <Header />
                    <div className="row justify-content-center">
                        <button
                            className="button m-3 shadow"
                            onClick={e => this.toggleLoadFilms(e)}              //e.target.value?
                        >Load Films</button>
                        <button
                            className="button m-3 shadow"
                            onClick={e => this.toggleLoadPeople(e)}              //e.target.value?
                        >Load People</button>
                    </div>
                    <PeopleList />
                </main >
            )
        }
    }
}


export default App;