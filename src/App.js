import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import './App.css';

// components
import Sidebar from './components/sidebar/Sidebar';
import ChatRoom from './components/chat/Chat';
import axios from './axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(function () {
    axios.get('/messages/list/').then(function (resp) {
      setMessages(resp.data);
    });
  }, []);

  useEffect(function () {
    var pusher = new Pusher('55cdf24316815e34282f', {
      cluster: 'ap1'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <ChatRoom messages={messages}/>
      </div>
    </div>
  );
}

export default App;