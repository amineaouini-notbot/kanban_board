import { createSlice } from '@reduxjs/toolkit';

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState: {},
    reducers: {
        addBoard: (state, action) => {
            state[action.payload.name] = {
                'To Do': [],
                'In Progress': [],
                'finished': []
            }
        },
        addNote: (state, action) => {
            state[action.payload.name][action.payload.column].push(action.payload.note)
        }
    }
})

export const { addBoard, addNote } = kanbanSlice.actions;

export default kanbanSlice.reducer;