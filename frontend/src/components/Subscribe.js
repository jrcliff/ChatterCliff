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

    }
    return (
        <div>
            <button onClick={() => handleSubscribe()}>
                Subscribe
            </button>   
        </div>
        
    );
}

export default Subscribe;
