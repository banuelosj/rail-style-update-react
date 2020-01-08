import React from 'react';
import RailCard from './RailCard';

const RailList = (props) => {
    return (
        <div>
            {props.cards.map((card, idx) => (
                <RailCard text={card.name} key={`#${card.name} - #${idx}`} onClick={props.onClick} />
            ))}
        </div>
    );
};

export default RailList;