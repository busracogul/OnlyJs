import React from 'react'
import { FaTrash } from "react-icons/fa";


const IconButton = ({handleClick}) => {
    return (
        <button>
            <FaTrash onClick={(e) =>{
                e.stopPropagation();
                handleClick();
            } }/>
        </button>
    )
}

export default IconButton