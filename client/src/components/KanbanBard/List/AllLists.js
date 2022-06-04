import React from "react";
import EachList from "./EachList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { reorderedNotes, reorderLists } from "../../../kanbanSlice";
import CreateList from "../CreateList/CreateList";
import './AllLists.css';

const AllLists = (props) => {
    const { BIndex } = props;
    const dispatch = useDispatch();
    let lists = useSelector(state => state.kanban.boards[BIndex].lists)
    const handleOnDrag = result => {
        if (!result.destination) return
        if (result.source.droppableId === 'all_lists') {

            let payload = {
                BIndex,
                DIndex: result.destination.index,
                SIndex: result.source.index
            }
            dispatch(reorderLists(payload))
        }
        else {
            let payload = {
                BIndex: BIndex,
                s_id: result.source.droppableId,
                d_id: result.destination.droppableId,
                s_index: result.source.index,
                d_index: result.destination.index
            }
            dispatch(reorderedNotes(payload))
        }
    }

    return (
        <div id="content">
            <DragDropContext onDragEnd={handleOnDrag}>
                <Droppable droppableId="all_lists" direction="horizantal" type="LIST">
                    {(provided) => {
                        return (
                            <div id="lists" {...provided.droppableProps} ref={provided.innerRef}>

                                {/* <DragDropContext onDragEnd={handleNoteDrag}> */}

                                {lists.map((list, LIndex) => <EachList LIndex={LIndex} BIndex={BIndex} />)}

                                {/* </DragDropContext> */}
                                {provided.placeholder}
                            </div>
                        )
                    }}
                </Droppable>
                <CreateList />
            </DragDropContext>
        </div>
    )
}
export default AllLists;