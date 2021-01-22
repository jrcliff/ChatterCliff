import React from 'react'
import RoomList from './RoomList'

 const SearchRoom = ({keyword, setKeyword}) => {
    const BarStyling = {width:'20rem', background:'f2f1f9', border:'none', padding:'0.5rem'};

    return (
        <input 
            style={BarStyling}
            key='random1'
            value={keyword}
            placholder={'Search Rooms'}
            onChange={(e) => setKeyword(e.target.value)}
        />
    )
}
export default SearchRoom