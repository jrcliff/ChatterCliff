import { Button } from '@material-ui/core'
import React from 'react'


export default function Room(props) {
    return (
        <div>
        <Button id='room' onClick={() => props.handleOpenRoom(props.room)}>
            {props.room.title}
        </Button>
        <Button onClick={(e) => props.handleDelete(props.room)}>Delete</Button>
        </div>
    )
}
