import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
    let boards = useSelector(state => state.kanban.boards)

    return (
        <div>
            <div id="create_board"><p>Create a new Board +</p></div>
        </div>
    )
}

export default Home;