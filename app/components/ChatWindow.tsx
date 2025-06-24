import React from 'react';
import { MessageBubble } from './MessageBubble';

export type Message = {
  sender: 'user' | 'bot';
  text: string;
};

type ChatWindowProps = {
  messages: Message[];
  loading: boolean;
};

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, loading }) => {
  return (
    <div className="w-full max-w-xl h-[500px] bg-white shadow rounded p-4 overflow-y-auto">
      {messages.map((msg, index) => (
        <MessageBubble key={index} sender={msg.sender} text={msg.text} />
      ))}
      {loading && (
        <div className="text-sm italic text-gray-400 mt-2">Bot is typing...</div>
      )}
    </div>
  );
};
