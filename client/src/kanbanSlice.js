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
                columns: {
                    'To Do': [],
                    'In Progress': [],
                    'finished': []
                }
            })
        },
        addNote: (state, action) => {
            state.boards[action.payload.index].columns[action.payload.column].push(action.payload.note)
        }
    }
})

export const { addBoard, addNote } = kanbanSlice.actions;

export default kanbanSlice.reducer;