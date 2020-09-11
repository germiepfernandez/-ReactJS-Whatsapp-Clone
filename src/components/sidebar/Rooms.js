import React from 'react'
import { Avatar } from '@material-ui/core'

import '../../styles/Rooms.css';

function Room({ avatar, name, latest, datetime }) {
    return (
        <div className="room">
            <Avatar src={avatar}/>
            <div className="room-info">
                <h3>{name}</h3>
                <p>{latest}</p>
                <div className="room-otherinfo">
                    {datetime && <p>{datetime}</p>}
                </div>
            </div>
        </div>
    )
}

export default Room;
