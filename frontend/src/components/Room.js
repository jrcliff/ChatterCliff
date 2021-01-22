import React from 'react'


export default function Room(props) {
    return (
        <div onClick={() => props.handleOpenRoom(props.room)}>
            {props.room.title}
            <button onClick={(e) => props.handleDelete(props.room)}>Delete</button>
        </div>
    )
}
