import React from 'react'
import NewMessage from './NewMessage'

export default function Messages(props) {
    console.log(props.openRoom?.messages)
    const messages = props.openRoom?.messages
    // if (message.user === current_user)
    // updateMessages(room){
    //     messages
    // }
    return (
        
        <div>
            {messages?.map(message => 
            <div user={message.user}>
                <span key={message.id} user={message.user}>{message.content}</span>
                <h2>{message.user.username}</h2>
             </div>   
             )
            }
            { props.openRoom ?  <NewMessage setMessages={messages} openRoom={props.openRoom} setOpenRoom={props.setOpenRoom}/> : <h2>Click on a room to Chat</h2> }
            
        </div>
    )
}
