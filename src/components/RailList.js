import React from 'react';
import RailCard from './RailCard';

const RailList = (props) => {
    return (
        <div>
            <RailCard text="Rail_1" onClick={props.onClick}/>
            <RailCard key="Rail_2"  text="Rail_2" onClick={props.onClick}/>
        </div>
    );
};

export default RailList;