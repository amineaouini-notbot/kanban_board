import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateList from "./CreateList/CreateList";
import List from "./List/List";
import './KanbanBoard.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const KanbanBoard = () => {
    let { id } = useParams();

    // @ts-ignore
    let board = useSelector(state => state.kanban.boards[id]);
    let { name, lists } = board;
    return (
        <div>
            <div id="board_title">
                <h2>{name}</h2>
            </div>
            <div id="content">
                <DragDropContext>
                    <Droppable droppableId="droppable_lists">
                        {(provided) => (

                            <div id="lists" {...provided.droppableProps} ref={provided.innerRef}>
                                {lists.map((list, LIndex) => (

                                    <List key={LIndex} LIndex={LIndex} BIndex={id} />

                                ))}

                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    <CreateList />
                </DragDropContext>
            </div>
        </div>
    )
}

export default KanbanBoard;