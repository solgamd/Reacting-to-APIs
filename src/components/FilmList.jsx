import React from 'react';
import FilmCard from './FilmCard';

class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(error => alert(error))
    }

    render() {
        return (
            <section className="container">
                <div className="row m-2">
                    <div className="col">
                    {this.state.films.map((film, i) => {
                        return (
                            <div key={i}>
                                <FilmCard title={film.title} description={film.description} />
                            </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        )

    }
}

export default FilmList;

