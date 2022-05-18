import React from 'react';
import { useSelector } from 'react-redux';

const Note = (props) => {
    const { NIndex, LIndex, BIndex } = props;
    // @ts-ignore
    const note = useSelector(state => state.kanban.boards[BIndex].lists[LIndex].content[NIndex]);
    console.log(note)
    return (
        <div>
            {note}
        </div>
    )
}

export default Note;