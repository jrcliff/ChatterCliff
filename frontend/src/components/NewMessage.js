import React, { useState } from 'react'

export default function NewMessage() {
    const [newMessage, setNewMessage] = useState('')

    handleSendMessage = (e) => {
        e.preventDefault();

        fetch()
    }

    handleChange = (e) => {
        e.preventDefault();
    }

    return (
        <div className='new-message-form'>
            <form className='new-message'>
                <input type='new-message' name='new-message'  id='new-message' placeholder='New Message' value='' ></input>
                <input type='submit' placeholder='send'></input>
            </form>
        </div>
    )
}
