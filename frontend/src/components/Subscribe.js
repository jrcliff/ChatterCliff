import { Button } from '@material-ui/core';
import React from 'react';

const Subscribe = (props) => {
console.log(props);
    const handleSubscribe = () => {
        
        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              user_id: 1,
              chat_room_id: props.openRoom?.id
            })
        }
        fetch('http://localhost:3000/subs', reqObj )
        .then(res => res.json())
        .then(sub => console.log(sub))
        let button = document.getElementById('subscribe-button')
        button.innerText = 'Subscribed'
    }
    return (
        <div className='subscribe-button'>
            <Button id='subscribe-button' onClick={() => handleSubscribe()}>
                Subscribe
            </Button>   
        </div>
        
    );
}

export default Subscribe;
