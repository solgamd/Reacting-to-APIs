import React from 'react';

const Card = (props) => {
    console.log(props);

        return (
            <div className="col-lg-4 mb-4">
                <div className="card h-100">
                    <h4 className="card-header">{props.title}</h4>
                    <div className="card-body">
                        <p className="card-text">{props.descrip}</p>
                    </div>
                </div>
            </div>
        )
}
export default Card;