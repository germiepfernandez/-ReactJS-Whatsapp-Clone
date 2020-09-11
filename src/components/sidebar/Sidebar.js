import React from 'react'
import Room from './Rooms';

import '../../styles/Sidebar.css';

import { Avatar, IconButton } from '@material-ui/core';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="header">
                <Avatar />
                <div className="sidebar-actions">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="search">
                <div className="sidebar-searchbar">
                    <SearchIcon />
                    <input type="text" placeholder="Search or start new chat"></input>
                </div>
            </div>
            <div className="rooms">
                <Room 
                    name="Hello World"
                    latest="This is the latest chat"
                ></Room>
                <Room 
                    name="Hello World"
                    latest="This is the latest chat"
                ></Room>
                <Room 
                    name="Hello World"
                    latest="This is the latest chat"
                ></Room>
                <Room 
                    name="Hello World"
                    latest="This is the latest chat"
                ></Room>
            </div>
        </div>
    )
}

export default Sidebar
