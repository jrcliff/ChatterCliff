import React from 'react'
import NewMessage from './NewMessage'

export default function Messages(props) {
    console.log(props.openRoom?.messages)
    let messages = props.openRoom?.messages
    // if (message.user === current_user)
    const updateMessages = () => {
        // messages.push(newMessage)
        messages?.map(message => 
            <div user={message.user}>
                <span key={message.id} user={message.user}>{message.content}</span>
                <h2>{message.user.username}</h2>
             </div>   
             )
    }
    return (
        
        <div>
            {messages?.map(message => 
            <div user={message.user}>
                <span key={message.id} user={message.user}>{message.content}</span>
                <h2>{message.user.username}</h2>
             </div>   
             )
            }
            { props.openRoom ?  <NewMessage className='new-message-bar' updateMessages={updateMessages} openRoom={props.openRoom} setOpenRoom={props.setOpenRoom}/> : <h2>Click on a room to Chat</h2> }
            
        </div>
    )
}
