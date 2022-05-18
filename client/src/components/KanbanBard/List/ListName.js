import React from "react";
import { useSelector } from "react-redux";
import './ListName.css';

const ListName = (props) => {
    // @ts-ignore
    const name = useSelector(state => state.kanban.boards[props.BIndex].lists[props.LIndex].name)
    return (
        <div className="lists_names">
            <span>{name}</span>
        </div>
    )
}

export default ListName;