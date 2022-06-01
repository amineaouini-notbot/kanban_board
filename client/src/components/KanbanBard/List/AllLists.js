import React from "react";
import EachList from "./EachList";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { reorderedNotes, reorderLists } from "../../../kanbanSlice";
import CreateList from "../CreateList/CreateList";
const AllLists = (props) => {
    const { BIndex } = props;
    const dispatch = useDispatch();
    let lists = useSelector(state => state.kanban.boards[BIndex].lists)
    const handleNoteDrag = result => {
        if (!result.destination) return
        let payload = {
            BIndex: BIndex,
            s_id: result.source.droppableId,
            d_id: result.destination.droppableId,
            s_index: result.source.index,
            d_index: result.destination.index
        }
        dispatch(reorderedNotes(payload))

    }

    const handleOnDrag = result => {
        if (!result.destination) return
        let payload = {
            BIndex,
            DIndex: result.destination.index,
            SIndex: result.source.index
        }
        dispatch(reorderLists(payload))
    }
    return (
        <div id="content">
            <DragDropContext onDragEnd={handleOnDrag}>
                <Droppable droppableId="all_lists" direction="horizantal" type="LIST">
                    {(provided) => {
                        return (
                            <div id="lists" {...provided.droppableProps} ref={provided.innerRef}>

                                <DragDropContext onDragEnd={handleNoteDrag}>

                                    {lists.map((list, LIndex) => <EachList LIndex={LIndex} BIndex={BIndex} />)}

                                </DragDropContext>
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