
import React, { useState } from 'react';
import { Book, Presentation, Video } from '../types';

interface AdminPanelProps {
  books: Book[];
  presentations: Presentation[];
  videos: Video[];
  onUpdateBooks: (books: Book[]) => void;
  onUpdatePresentations: (pres: Presentation[]) => void;
  onUpdateVideos: (vids: Video[]) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  books, presentations, videos, 
  onUpdateBooks, onUpdatePresentations, onUpdateVideos 
}) => {
  const [activeTab, setActiveTab] = useState<'books' | 'presentations' | 'videos'>('books');

  const handleDelete = (type: string, id: string) => {
    if (type === 'books') onUpdateBooks(books.filter(b => b.id !== id));
    if (type === 'presentations') onUpdatePresentations(presentations.filter(p => p.id !== id));
    if (type === 'videos') onUpdateVideos(videos.filter(v => v.id !== id));
  };

  const AddCard = ({ type }: { type: string }) => (
    <button className="border-2 border-dashed border-stone-300 rounded-lg p-6 flex flex-col items-center justify-center text-stone-400 hover:border-stone-800 hover:text-stone-800 transition-all h-full min-h-[200px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mb-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      <span className="font-medium">Добавить {type}</span>
    </button>
  );

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden min-h-[700px] flex">
      {/* Sidebar */}
      <div className="w-64 bg-stone-900 text-white p-6 flex flex-col">
        <div className="mb-10">
          <h2 className="text-xl font-serif font-bold">Управление</h2>
          <p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Панель администратора</p>
        </div>
        
        <nav className="space-y-2 flex-1">
          {(['books', 'presentations', 'videos'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${
                activeTab === tab ? 'bg-white/10 text-white' : 'text-stone-400 hover:text-white'
              }`}
            >
              <span className="capitalize">{tab === 'books' ? 'Книги' : tab === 'presentations' ? 'Презентации' : 'Видео'}</span>
            </button>
          ))}
        </nav>
        
        <div className="pt-6 border-t border-stone-800">
          <p className="text-[10px] text-stone-500">Вошли как: Администратор</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 bg-stone-50/50 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-serif font-bold text-stone-800">
            {activeTab === 'books' ? 'Ваши Книги' : activeTab === 'presentations' ? 'Ваши Презентации' : 'Видео Лекции'}
          </h3>
          <div className="text-sm text-stone-500">
            Всего элементов: {activeTab === 'books' ? books.length : activeTab === 'presentations' ? presentations.length : videos.length}
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AddCard type={activeTab === 'books' ? 'книгу' : activeTab === 'presentations' ? 'презентацию' : 'видео'} />
          
          {activeTab === 'books' && books.map(book => (
            <div key={book.id} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm group relative">
              <div className="aspect-[3/4] mb-3 overflow-hidden rounded-lg bg-stone-100">
                <img src={book.coverImage} className="w-full h-full object-cover" alt="" />
              </div>
              <h4 className="font-bold text-stone-800 truncate">{book.title}</h4>
              <p className="text-xs text-stone-500">{book.year}</p>
              <button 
                onClick={() => handleDelete('books', book.id)}
                className="absolute top-2 right-2 p-2 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          ))}

          {activeTab === 'presentations' && presentations.map(p => (
            <div key={p.id} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm group relative flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-stone-800 line-clamp-2">{p.title}</h4>
                <p className="text-xs text-stone-500 mt-2">{p.date}</p>
              </div>
              <button 
                onClick={() => handleDelete('presentations', p.id)}
                className="absolute top-2 right-2 p-2 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          ))}
          
          {activeTab === 'videos' && videos.map(v => (
            <div key={v.id} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm group relative">
              <div className="aspect-video mb-3 overflow-hidden rounded-lg bg-stone-900 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-white/50" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
              </div>
              <h4 className="font-bold text-stone-800 truncate">{v.title}</h4>
              <button 
                onClick={() => handleDelete('videos', v.id)}
                className="absolute top-2 right-2 p-2 bg-red-50 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
