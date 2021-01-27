import React, { useState } from 'react'
import { render } from 'react-dom';
import Messages from './Messages';


export default function NewMessage(props) {
    const [newMessage, setNewMessage] = useState('')

    const handleSendMessage = (e) => {
        e.preventDefault();
        const data = newMessage
        let reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              content: data,
              user_id: props.user.id,
              chat_room_id: props.openRoom?.id
            })
        }
        fetch('http://localhost:3000/messages', reqObj)
        .then(res => res.json())
        .then(message => props.updateMessages(message))
        props.setOpenRoom(props.openRoom)
        console.log(props.user);
      
        
    }

    const handleChange = (e) => {
        e.preventDefault();
        setNewMessage(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div className='new-message-form'>
            <form onSubmit={handleSendMessage } className='new-message'>
                <input type='text' onChange={(e) => handleChange(e)} name='new-message'  id='new-message' placeholder='New Message' value={newMessage} ></input>
                <input type='submit' placeholder='send'></input>
            </form>
        </div>
    )
}
