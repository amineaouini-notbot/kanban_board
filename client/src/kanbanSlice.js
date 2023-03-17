import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState: {
        boards: [],
        openedBoard: []
    },
    reducers: {
        retrieveAllBoards: (state, action) => {
            const {allBoards} = action.payload;
            
            state.boards = allBoards;
        },
        addBoard: (state, action) => {
            const {name, id, index} = action.payload;
            
            state.boards.push({ // add board
                id,
                name,
                lists: []
            })
            state.openedBoard.push({id, index});
        },
        openBoard: (state, action) => {
            const {id, index} = action.payload;
            state.openedBoard.push(action.payload);
        },
        addList: (state, action) => { // add list to board
            state.boards[action.payload.BIndex].lists.push({ name: action.payload.name, content: [] })

        },
        reorderLists: (state, action) => { // once drag and drop
            let { DIndex, SIndex, BIndex } = action.payload;
            let [reorderedList] = state.boards[BIndex].lists.splice(SIndex, 1); // retrieve dragged list
            state.boards[BIndex].lists.splice(DIndex, 0, reorderedList) // save list where it's dropped

        },
        addNote: (state, action) => { // add note to list
            state.boards[action.payload.BIndex].lists[action.payload.LIndex].content.push(action.payload.content)
        },
        reorderedNotes: (state, action) => { // once drag and drop note
            let { s_id, s_index, d_id, d_index, BIndex } = action.payload;
            let [droppedNote] = state.boards[BIndex].lists[s_id].content.splice(s_index, 1); // retrieve dragged note
            state.boards[BIndex].lists[d_id].content.splice(d_index, 0, droppedNote) // save note where it's dropped
        },
        updateNote: (state, action) => { // once save updated note
            let { NIndex, LIndex, BIndex, newContent } = action.payload;
            state.boards[BIndex].lists[LIndex].content.splice(NIndex, 1, newContent) // update note to it's new value
        }
    }
})

export const { addBoard, addNote, addList, reorderLists, reorderedNotes, updateNote, openBoard, retrieveAllBoards } = kanbanSlice.actions;

export default kanbanSlice.reducer;