import React from 'react';

type ChatInputProps = {
  input: string;
  setInput: (value: string) => void;
  onSend: () => void;
};

export const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, onSend }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSend();
  };

  return (
    <div className="w-full max-w-xl flex gap-2 mt-4">
      <input
        type="text"
        className="flex-1 p-2 border rounded text-black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <button
        onClick={onSend}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
};
