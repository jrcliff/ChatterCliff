import React from 'react'


export default function Room(props) {
    return (
        <div onClick={() => props.handleOpenRoom(props.room)}>
            {props.room.title}
        </div>
    )
}
