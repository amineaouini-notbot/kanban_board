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
        addNote: (state, action) => {
            state.boards[action.payload.BIndex].lists[action.payload.LIndex].content.push(action.payload.content)
        }
    }
})

export const { addBoard, addNote, addList } = kanbanSlice.actions;

export default kanbanSlice.reducer;