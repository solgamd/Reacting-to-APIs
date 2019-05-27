import React from 'react';

const FilmCard = (props) => {

    return (
        <div className="col-4 mb-4">
            <div className="card h-100">
                <h4 className="card-header bg-primary text-white">{props.title}</h4>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default FilmCard;


