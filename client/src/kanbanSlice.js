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
        }
    }
})

export const { addBoard } = kanbanSlice.actions;

export default kanbanSlice.reducer;