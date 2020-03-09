import React from "react";

import "./Header.css";
import HeaderAvatarImages from './HeaderAvatarImages';

function Header(props) {


  // console.log(props.messages)
  let messageParticipants = [];
  // console.log("finding Elaine's face",props.currentUser.avatar);
  props.messages.forEach((message)=> {
    // console.log('message', message);
    // console.log('message.user.avatar', message.user.avatar);
    let found = messageParticipants.find(element => (element === message.user.avatar))
    // console.log('found', found);
    if (!found && message.user.avatar !== props.currentUser.avatar) messageParticipants.push(message.user.avatar)
  })
  // console.log('participants:', messageParticipants);
  // let faces = '';  // This is not working

  return <header>{
    <section className='chat-header'>
      {props.currentUser.username}'s conversation with:
      {/* <img class="avatarImg"src='/assets/george.png' alt='one pretty face'/>
      <img class="avatarImg"src='/assets/jerry.jpg' alt='one pretty face'/> */}
      {messageParticipants.map((participant)=> {
        // faces += `<img class="avatarImg"src='${participant}' alt='one pretty face'/> `
        return (
          <HeaderAvatarImages
            key = {participant}
            face = {participant}
          />
        );
      })}
      {/* {faces} Not working */}
    </section>
  }</header>;
}

export default Header;

{/* <section className="chat-stream">
      {props.messages.map(message => {
        let messageType;
        if (message.user === props.currentUser) {
          messageType = 'sent';
        } else {
          messageType = 'received';
        }
        return (
          <ChatMessage
            user={message.user}
            body={message.body}
            messageType={messageType}
          />
        );
      })}
    </section> */}