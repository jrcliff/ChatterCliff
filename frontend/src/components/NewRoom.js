import { Button, TextField } from '@material-ui/core';
import React, { useState, setRooms, rooms } from 'react'


export default function NewRoom(props) {
    const [newRoom, setNewRoom] = useState('')

    const handleSendRoom = (e) => {
        e.preventDefault();
        const data = newRoom
        let reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              title: data,
              user_id: 1,

            //   user_id: props.currentUser.id,
              
            })
        }
        fetch('http://localhost:3000/chat_rooms', reqObj)
        .then(res => res.json())
        .then(room => props.updateNewRooms(room))
        setNewRoom('')

    }

    const handleChange = (e) => {
        e.preventDefault();
        setNewRoom(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div className='new-room-form'>
            <form onSubmit={handleSendRoom } className='new-room'>
                <TextField type='text' onChange={(e) => handleChange(e)} name='new-room'  id='new-room' placeholder='New Room' value={newRoom} ></TextField>
                <Button type='submit' placeholder='create'></Button>
            </form>
        </div>
    )
}
