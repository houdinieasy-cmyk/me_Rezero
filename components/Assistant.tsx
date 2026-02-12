
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: "Вы — Феруза Бозарова, философ, преподаватель и исследователь культуры. Отвечайте на вопросы пользователей в глубоком, вежливом и интеллектуальном стиле, основываясь на темах философии повседневности, этики и антропологии. Используйте красивый русский язык.",
          temperature: 0.7,
        },
      });

      const assistantText = response.text || "Извините, я не могу сейчас ответить на этот вопрос.";
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Произошла ошибка при соединении с философским ассистентом." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[600px] flex flex-col bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
      <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.501-11.418m-1.501 11.418A6.01 6.01 0 0110.5 6.582M12 18a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
        </div>
        <div>
          <h3 className="font-serif font-bold text-stone-800">Философский ассистент</h3>
          <p className="text-xs text-stone-500 italic">Спросите о смысле, этике или культуре</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-12 text-stone-400 italic">
            Начните диалог о вечном...
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              m.role === 'user' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-800'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-stone-100 rounded-2xl px-4 py-3 flex space-x-1">
              <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-stone-200 flex space-x-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Введите ваш вопрос..."
          className="flex-1 px-4 py-2 rounded-full border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400 text-sm"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="w-10 h-10 rounded-full bg-stone-800 text-white flex items-center justify-center hover:bg-stone-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Assistant;
