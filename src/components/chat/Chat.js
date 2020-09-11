import React, { useState } from 'react';
import Message from './Message';
import axios from '../../axios'

import { Avatar, IconButton } from '@material-ui/core';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

import '../../styles/Chat.css';

function ChatRoom({ name, members, messages }) {
    const [input, setInput] = useState('')
    const sendMessage = async function (e) {
        e.preventDefault();
        debugger
        await axios.post('/messages/new/', {
            name: 'Jemsun',
            message: input,
            received: true,
            timestamp: '03:30 PM'
        });

        setInput('');
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <div className="chat-infocont">
                    <Avatar />
                    <div className="details">
                        <h3>Musick</h3>
                        <p>Test Member List</p>
                    </div>
                </div>
                <div className="chat-actions">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                {
                    messages.map(function ({ name, message, received }) {
                        return <Message 
                            name={name}
                            message={message}
                            isreceiver={received}
                        ></Message>
                    })
                }
            </div>
            <div className="chat-footer">
                <IconButton>
                    <EmojiEmotionsOutlinedIcon />
                </IconButton>
                <form className="chat-message">
                    <input value={input} 
                        onChange={e => setInput(e.target.value)} 
                        type="text" 
                        placeholder="Search or start new chat">
                    </input>
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatRoom
