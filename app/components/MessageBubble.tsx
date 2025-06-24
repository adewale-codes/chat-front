import React from 'react';

type BubbleProps = {
  sender: 'user' | 'bot';
  text: string;
};

export const MessageBubble: React.FC<BubbleProps> = ({ sender, text }) => {
  const isUser = sender === 'user';
  return (
    <div
      className={`mb-2 p-2 rounded max-w-[75%] ${
        isUser
          ? 'bg-blue-100 self-end text-right ml-auto'
          : 'bg-gray-200 self-start text-left mr-auto'
      }`}
    >
      <div className="text-sm font-semibold mb-1">
        {isUser ? 'You' : 'Bot'}
      </div>
      <div>{text}</div>
    </div>
  );
};
