import React from 'react';

const RailCard = (props) => {
    return (
        <div 
            className="ui segment"
            id={props.text}
            onClick={props.onClick}
            style={{cursor: 'pointer', backgroundColor: "#B5CC18"}}
        >
            {props.text}
        </div>
    );
};

export default RailCard;