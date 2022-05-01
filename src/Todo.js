import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo(props) {
     
    const [line , setLine] = useState(false)

    const deleteList = () => {
        setLine(true);
    }

    return (
        <div id='todos'>
            <DeleteIcon  className='deleteIcon' onClick={deleteList}/>
           <p style={{textDecoration : line ? "line-through" : "none"}}>{props.text}</p> 
        </div>
    )
}

export default Todo
