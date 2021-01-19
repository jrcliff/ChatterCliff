import React, { useState, useEffect } from 'react'
import ChatRooms from './ChatRooms'


export default function Home() {

  


    return (
        <div id='chat-container'>
            <div id="side-bar">
            <ChatRooms />
            </div>
            <div id="chat-window">
            
            </div>

            
        </div>
    )
}
