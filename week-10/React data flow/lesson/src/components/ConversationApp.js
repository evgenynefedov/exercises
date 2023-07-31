import React, { useState } from 'react'
import Conversation from './Conversation';
import List from './List';

function ConversationApp() {

    const [chat, setChat] = useState({
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    { text: "Hi", sender: "self" },
                    { text: "You there?", sender: "self" },
                    { text: "Yeah, hi, what's up?", sender: "other" }
                ]
            },
            {
                with: "Dad", convo: [
                    { text: "Have you finished your school work yet?", sender: "other" },
                    { text: "Yes.", sender: "self" },
                    { text: "What do you mean, yes?", sender: "other" },
                    { text: "??", sender: "self" }
                ]
            },
            {
                with: "Shoobert", convo: [
                    { text: "Shoobert!!!", sender: "self" },
                    { text: "Dude!!!!!!!!", sender: "other" },
                    { text: "Shooooooooo BERT!", sender: "self" },
                    { text: "You're my best friend", sender: "other" },
                    { text: "No, *you're* my best friend", sender: "self" },
                ]
            }
        ]
    })

    const displayConvo = (name) => {
        setChat({...chat, displayConversation: name})
    }

    const back = () => displayConvo(null)

    const getConvo = (name) => {
        let convoId = chat.conversations.findIndex(c => c.with == name)
        return chat.conversations[convoId].convo
    }

    return (
      <div>
        {chat.displayConversation ? <Conversation convo={getConvo(chat.displayConversation)} sender={chat.displayConversation} back={back} /> : <List contacts={chat.conversations.map(c => ({name: c.with}))} displayConvo={displayConvo} />}
      </div>
    );
  }
  
  export default ConversationApp;
  