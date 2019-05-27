import React from 'react';

const PeopleCard = (props) => {
    console.log(props);

        return (
            <div className="col-lg-4 mb-4">
                <div className="card h-100">
                    <h4 className="card-header">{props.title}</h4>
                    <div className="card-body">
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">{props.name}</p>
                        <p className="card-text">{props.age}</p>
                        <p className="card-text">{props.gender}</p>

                    </div>
                </div>
            </div>
        )
}
export default PeopleCard;