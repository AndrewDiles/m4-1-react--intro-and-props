import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

function App(props) {
  // console.log(props);
  return (
    <div className="sideBySide">
      <div className="master">
        <Header messages={props.conversation.messages} currentUser={props.currentUser} />
        <ChatStream messages={props.conversation.messages} currentUser={props.currentUser} />
        <Footer />
      </div>
      <div className="master">
        <Header messages={props.conversation.messages} currentUser={props.conversation.participants[1]} />
        <ChatStream messages={props.conversation.messages} currentUser={props.conversation.participants[1]} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
