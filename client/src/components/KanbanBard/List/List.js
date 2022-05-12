import React from "react";
import './List.css';

const List = (props) => {
    const { BIndex, LIndex, name } = props;
    return (
        <div className="lists">
            <div>{name}</div>
        </div>
    )
}

export default List;