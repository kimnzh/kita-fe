import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  sender: 'me' | 'other';
  text: string;
  time: string;
}

interface Conversation {
  id: number;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  unreadCount: number;
  messages: Message[];
}

const initialConversations: Conversation[] = [
  {
    id: 1,
    name: 'Dr. Madelyn Vetrovs',
    role: 'Dentist',
    avatar: '/src/assets/MadelynVetrovs.jpg',
    lastMessage: 'Me: thank you...',
    unreadCount: 1,
    messages: [
      { id: 1, sender: 'other', text: 'Lorem ipsum dolor sit amet consectetur. Ac nunc faucibus auctor purus nulla pretium bibendum.', time: 'Just Now' },
      { id: 2, sender: 'me', text: 'Lorem ipsum dolor sit amet consectetur. Habitant cursus turpis enim mauris blandit eu. Fames sodales suspendisse nullam nulla id mollis in tempor elit. Malesuada nunc sem pharetra orci lobortis turpis. Tellus nunc morbi commodo suspendisse a viverra sit.', time: 'Just Now' },
      { id: 3, sender: 'other', text: 'Okay, I understand. Let me check and get back to you.', time: 'Yesterday 3:00 PM' },
      { id: 4, sender: 'me', text: 'Thank you for your help!', time: 'Yesterday 3:05 PM' },
    ],
  },
  {
    id: 2,
    name: 'Dr. Kierra Korsgaard',
    role: 'Dentist',
    avatar: '/src/assets/KierraKorsgaard.jpg',
    lastMessage: 'Me: Okay, thanks.',
    unreadCount: 0,
    messages: [
      { id: 1, sender: 'other', text: 'Your appointment is confirmed for next week.', time: '2 days ago' },
      { id: 2, sender: 'me', text: 'Okay, thanks.', time: '2 days ago' },
    ],
  },
  {
    id: 3,
    name: 'Dr. Kaiya Curtis',
    role: 'Dentist',
    avatar: '/src/assets/KaiyaCurtis.jpg',
    lastMessage: 'Sure, no problem.',
    unreadCount: 1,
    messages: [
      { id: 1, sender: 'other', text: 'Can we reschedule our meeting to tomorrow?', time: '3 days ago' },
      { id: 2, sender: 'me', text: 'Sure, no problem.', time: '3 days ago' },
    ],
  },
  {
    id: 4,
    name: 'Dr. Martin Westervelt',
    role: 'Dentist',
    avatar: '/src/assets/MartinWestervelt.jpg',
    lastMessage: 'Me: Got it.',
    unreadCount: 0,
    messages: [
      { id: 1, sender: 'other', text: 'Remember to bring your medical records.', time: '4 days ago' },
      { id: 2, sender: 'me', text: 'Got it.', time: '4 days ago' },
    ],
  },
  {
    id: 5,
    name: 'Haylie Septimus',
    role: 'Dental Hygienist',
    avatar: '/src/assets/HaylieSeptimus.jpg',
    lastMessage: 'Hello!',
    unreadCount: 1,
    messages: [
      { id: 1, sender: 'other', text: 'Hello!', time: '5 days ago' },
    ],
  },
  // Add more dummy conversations to fill the sidebar
  {
    id: 6,
    name: 'Jocelyn Mango',
    role: 'Dental Hygienist',
    avatar: '/src/assets/JocelynMango.jpg',
    lastMessage: 'See you then!',
    unreadCount: 0,
    messages: [
      { id: 1, sender: 'other', text: 'Confirmed our booking for next Tuesday.', time: '1 week ago' },
      { id: 2, sender: 'me', text: 'See you then!', time: '1 week ago' },
    ],
  },
  {
    id: 7,
    name: 'Terry Botosh',
    role: 'Dental Hygienist',
    avatar: '/src/assets/TerryBotosh.jpg',
    lastMessage: 'Thanks a lot!',
    unreadCount: 0,
    messages: [
      { id: 1, sender: 'other', text: 'Your prescription is ready for pick up.', time: '1 week ago' },
      { id: 2, sender: 'me', text: 'Thanks a lot!', time: '1 week ago' },
    ],
  },
];

const Messages = () => {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState<number | null>(initialConversations[0]?.id || null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeConversation?.messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !activeConversation) return;

    const newMsg: Message = {
      id: activeConversation.messages.length + 1,
      sender: 'me',
      text: newMessage.trim(),
      time: 'Just Now', // Or format current time
    };

    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === activeConversationId
          ? {
              ...conv,
              messages: [...conv.messages, newMsg],
              lastMessage: `Me: ${newMessage.trim()}`,
              unreadCount: 0, // Mark as read when I send a message
            }
          : conv
      )
    );
    setNewMessage('');
  };

  const handleConversationClick = (id: number) => {
    setActiveConversationId(id);
    // Mark as read when clicking on a conversation
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === id ? { ...conv, unreadCount: 0 } : conv
      )
    );
  };

  return (
    <div className="flex flex-1 overflow-hidden p-8 h-[94vh]"> {/* Added h-screen here */}
      <div className="bg-white rounded-lg shadow-md flex-1 flex overflow-hidden">
        {/* Left Pane: Conversation List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Messages</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`flex items-center p-4 cursor-pointer border-b border-gray-100 last:border-b-0 ${activeConversationId === conv.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                onClick={() => handleConversationClick(conv.id)}
              >
                <img
                  src={conv.avatar}
                  alt={conv.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-800">{conv.name}</h3>
                    <span className="text-xs text-gray-500">{conv.messages[conv.messages.length -1]?.time || ''}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate mt-1">{conv.lastMessage}</p>
                </div>
                {conv.unreadCount > 0 && (
                  <span className="ml-3 bg-green-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {conv.unreadCount}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Chat Window */}
        <div className="flex-1 flex flex-col h-full"> {/* Added h-full here */}
          {activeConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 flex items-center">
                <img
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{activeConversation.name}</h3>
                  <p className="text-sm text-gray-500">{activeConversation.role}</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
                {activeConversation.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg relative ${
                        msg.sender === 'me'
                          ? 'bg-blue-500 text-white rounded-br-none'
                          : 'bg-gray-200 text-gray-800 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                      {/* Optional: time badge for messages */}
                      {/* <span className="absolute bottom-1 right-2 text-xs opacity-75">{msg.time}</span> */}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} /> {/* Scroll to this element */}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="relative">
                  <textarea
                    className="w-full p-3 pr-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault(); // Prevent new line
                        handleSendMessage();
                      }
                    }}
                  />
                  <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                    <span className="text-sm text-gray-400">
                      {newMessage.length}/2000
                    </span>
                    <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a4 4 0 00-5.656-5.656l-6.415 6.415a2 2 0 102.828 2.828L15.172 7z" /></svg>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </button>
                    <button
                      onClick={handleSendMessage}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full ml-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a conversation to start chatting.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;