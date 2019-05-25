import React, { Component } from 'react';
// import 'isomorphic-fetch';
// import 'es6-promise';    //Wouldn't compile; caused errors
import Card from './Card';

class App extends Component {
    constructor (props) {
        super(props); 
        this.state = {
           films: []
        };
    }
    componentDidMount() {
        let title = this.state.title;
        let description = this.state.description;

        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => console.log(obj))
            
            return this.setState({ title: title, description: description })
        
    };
    // handleClick() {
        
    //     this.setState({ title: title, description: description }) 
    // }
    render() {
        return (
            <div className="App">
                <header className="App-header d-flex m-2 justify-content-center">
                    <h1>Reacting to APIs</h1>
                </header>
                <div className="row d-flex justify-content-center">
                    <button 
                    className="button m-5 shadow" 
                    onChange={e => this.componentDidMount(e)}
                    >Load Films</button>
                </div>
                <section className="container">
                <div className="row m-2">
                    {this.state.films.map(([title, description], i) => {
                        return (
                            <Card key={i} title={title} description={description} />
                        )
                    })};
                    
                    </div>
                </section>
            </div>
        );
    }
}

export default App;