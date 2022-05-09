import React from "react";
import { useParams } from "react-router-dom";

const KanbanBoard = () => {
    let { id } = useParams();
    return (<div> Hi {id}</div>)
}

export default KanbanBoard;