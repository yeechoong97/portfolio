import React from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn';
import ReceiverMessage from './ReceiverMessage';
import SenderMessage from './SenderMessage';
import Header from './Header';
import ChatSection from './ChatSection';
import { conversation } from '../data.js'

const ChatComponent = ({ setNext }) => {
    return (
        <>
            <FadeIn>
                < div className={`about-me`}>
                    <div className={`bg-white mb-5 text-center rounded-3 d-flex flex-column position-relative shadow-lg`}>
                        <Header onClick={() => setNext(false)} />
                        <div className={`bg-white rounded-3 d-flex flex-column position-relative px-4 py-2 m-1 chat-container`}>
                            {conversation.map((chat, index) =>
                                index % 2 !== 0 ? <SenderMessage message={chat} key={index} index={index} /> : <ReceiverMessage message={chat} key={index} />
                            )}
                        </div>
                        <ChatSection />
                    </div>
                </div>
            </FadeIn>
        </>
    )
}

export default ChatComponent