import React from 'react';

const PeopleCard = (props) => {

    return (
        <div className="col-3 mb-4">
            <div className="card h-100">
                <h4 className="card-header bg-secondary text-white">{props.name}</h4>
                <div className="card-body">
                    <p className="card-text">Age: {props.age}</p>
                    <p className="card-text">Gender: {props.gender}</p>
                    <a target="_blank" rel="noopener noreferrer" href={"http://ghibliapi.herokuapp.com/people/" + props.id}>Get JSON</a>
                </div>
            </div>
        </div>
    )
}
export default PeopleCard;