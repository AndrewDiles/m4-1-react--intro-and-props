import React from 'react';

import './ChatMessage.css';
// import ChatStream from './ChatStream';

// function ChatMessage(props) {
    
//     console.log(props)
    
//     // <React.Fragment>
//     return <span class = 'wrapper'>
//         <img class="avatarImg"src={props.message.user.avatar} alt='one pretty face'/>
//         <div class = "messageDiv"> 
//             <div class = 'name'>
//                 {props.message.user.username}
//             </div> 
//             <div class = 'message'>
//                 {props.message.body}
//             </div>
//         </div>
//     </span>
// }

function SentMessage(props) {
    return <span className = 'wrapperSent'>
        {/* {console.log(props.message)} */}
        <img className="avatarImg"src={props.message.user.avatar} alt='one pretty face'/>
        <img className="sentTextTip"src="/assets/tip-sent.svg" alt='accent on speach bubble'/>
        <div className = "messageDivSent"> 
            <div className = 'nameSent'>
                {props.message.user.username}
            </div> 
            <div className = 'messageSent'>
                {props.message.body}
            </div>
        </div>
    </span>
}

function ReceivedMessage(props) {
    return <span className = 'wrapperRec'>
        <img className="avatarImg"src={props.message.user.avatar} alt='one pretty face'/>
        <img className="receivedTextTip"src="/assets/tip-received.svg" alt='accent on speach bubble'/>
        <div className = "messageDivRec"> 
            <div className = 'nameRec'>
                {props.message.user.username}
            </div> 
            <div className = 'messageRec'>
                {props.message.body}
            </div>
        </div>
    </span>
}


function ChatMessage(props) {
    // {console.log(props)}
    if (props.messageType === 'sent') {
        return <SentMessage message={props} />;
    } else {
        return <ReceivedMessage message={props} />;
    }
}


export default ChatMessage;


// {/* return <div><img class="avatarImg"src={props.user.avatar}></img>{props.message.body}</div> */}
    // </React.Fragment>
    // {/* return <div className="chat-message"></div>; */}