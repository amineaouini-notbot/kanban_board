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
                columns: [
                    {
                        name: 'To Do',
                        notes: []
                    }, {
                        name: 'In Progress',
                        notes: []
                    }, {
                        name: 'finished',
                        notes: []
                    }
                ]
            })
        },
        addNote: (state, action) => {
            state.boards[action.payload.BIndex].columns[action.payload.CIndex].push(action.payload.content)
        }
    }
})

export const { addBoard, addNote } = kanbanSlice.actions;

export default kanbanSlice.reducer;