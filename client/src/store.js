import { configureStore } from "@reduxjs/toolkit";
import kanbanSlice from "./kanbanSlice";

export default configureStore({
    reducer: {
        kanban: kanbanSlice
    }
})