import React from 'react';
import './custom-icon.scss';

export default function CustomIcon(props) {
    return (
        <div className={"custom-icon custom-icon-" + props.name}></div>
    );
}