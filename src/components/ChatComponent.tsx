import { FunctionComponent } from 'react'
import FadeIn from 'react-fade-in/lib/FadeIn';
import ReceiverMessage from './ReceiverMessage';
import SenderMessage from './SenderMessage';
import Header from './Header';
import ChatSection from './ChatSection';
import { conversation } from '../data.js'
import { ChatProps } from '../types';


const ChatComponent: FunctionComponent<ChatProps> = ({ setNext }) => {
    return (
        <>
            <FadeIn className='pt-5'>
                < div className={`about-me`}>
                    <div className={`bg-white mb-5 text-center rounded-3 d-flex flex-column position-relative shadow-lg`}>
                        <Header onClick={() => setNext(false)} />
                        <div className={`bg-white rounded-3 d-flex flex-column position-relative px-4 py-2 m-1 chat-container`}>
                            {conversation.map((chat: string, index: number) =>
                                index % 2 !== 0 ? <SenderMessage message={chat} key={index} /> : <ReceiverMessage message={chat} key={index} />
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