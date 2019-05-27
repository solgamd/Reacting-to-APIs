import React from 'react';
import PeopleCard from './PeopleCard';

class PeopleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            people: []
         };
    }
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(error => alert(error))
    }

    render() { 
        return (
            <section className="container">
                <div className="row m-2">
                    <div className="col">
                    {this.state.people.map((person, i) => {
                        return (
                            <div key={i}>
                                <PeopleCard name={person.name} age={person.age} gender={person.gender} />
                            </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        )
        
    }
}
 
export default PeopleList;
 
