'use client';

import React, { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatWindow } from './components/ChatWindow';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};


export default function HomePage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMsg: Message = { sender: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Failed to fetch:', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error: Failed to connect to server.' }]);
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">AI Counseling Chatbot</h1>
      <ChatWindow messages={messages} loading={loading} />
      <ChatInput input={input} setInput={setInput} onSend={handleSend} />
    </main>
  );
}
