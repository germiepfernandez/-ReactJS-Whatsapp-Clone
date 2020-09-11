import React from 'react'

import '../../styles/Message.css';

function Message({ name, message, datetime, isreceiver}) {
    return (
        <div className={isreceiver ? 'message receiver' : 'message'}>
            <span className="name">{name}</span>
            <span className="text">{message}</span>
            <span className="timestamp">{'20:20'}</span>
        </div>
    )
}

export default Message
