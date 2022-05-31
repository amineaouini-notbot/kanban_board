import { createSlice } from '@reduxjs/toolkit';

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState: {
        boards: []
    },
    reducers: {
        addBoard: (state, action) => {
            state.boards.push({
                name: action.payload.name,
                lists: []
            })
        },
        addList: (state, action) => {
            state.boards[action.payload.BIndex].lists.push({ name: action.payload.name, content: [] })

        },
        onDragEndList: (state, action) => {
            let { DIndex, SIndex, BIndex } = action.payload;
            let [reorderedList] = state.boards[BIndex].lists.splice(SIndex, 1);
            state.boards[BIndex].lists.splice(DIndex, 0, reorderedList)

        },
        addNote: (state, action) => {
            state.boards[action.payload.BIndex].lists[action.payload.LIndex].content.push(action.payload.content)
        },
        reorderedList: (state, action) => {
            let { s_id, s_index, d_id, d_index, BIndex } = action.payload;
            let [droppedNote] = state.boards[BIndex].lists[s_id].content.splice(s_index, 1);
            state.boards[BIndex].lists[d_id].content.splice(d_index, 0, droppedNote)
        }
    }
})

export const { addBoard, addNote, addList, onDragEndList, reorderedList } = kanbanSlice.actions;

export default kanbanSlice.reducer;