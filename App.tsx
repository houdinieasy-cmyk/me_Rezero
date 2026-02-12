
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Assistant from './components/Assistant';
import AdminPanel from './components/AdminPanel';
import { INITIAL_BOOKS, INITIAL_PRESENTATIONS, INITIAL_VIDEOS, CAREER_HISTORY } from './constants';
import { Section, Book, Presentation, Video } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);
  const [presentations, setPresentations] = useState<Presentation[]>(INITIAL_PRESENTATIONS);
  const [videos, setVideos] = useState<Video[]>(INITIAL_VIDEOS);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-16 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-80 h-[450px] flex-shrink-0 bg-stone-200 rounded-sm overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://picsum.photos/seed/feruza_professional/800/1200" 
                  alt="Феруза Бозарова" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
              </div>
              <div className="flex-1 space-y-8 text-center md:text-left">
                <div className="space-y-2">
                  <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight">
                    Феруза Бозарова
                  </h1>
                  <p className="text-xl md:text-2xl text-stone-500 font-serif italic">
                    PhD (Falsafa doktori), Доцент
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-lg font-bold uppercase tracking-[0.2em] text-stone-400">Текущая деятельность</h2>
                  <p className="text-xl text-stone-800 font-medium max-w-2xl leading-relaxed">
                    Начальник отдела по делам молодежи, духовности и просвещения филиала Казанского федерального университета в г. Джизаке.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
                  <button 
                    onClick={() => setActiveSection('career')}
                    className="px-8 py-4 bg-stone-900 text-white hover:bg-stone-800 transition-all font-bold uppercase tracking-widest text-xs"
                  >
                    Подробная биография
                  </button>
                  <button 
                    onClick={() => setActiveSection('assistant')}
                    className="px-8 py-4 border border-stone-300 text-stone-900 hover:bg-stone-50 transition-all font-bold uppercase tracking-widest text-xs"
                  >
                    Задать вопрос AI
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-stone-200">
               <div className="p-8 bg-white border border-stone-100 rounded-lg shadow-sm">
                  <h3 className="font-serif font-bold text-2xl mb-4">Научный путь</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Прошла путь от ассистента кафедры в Национальном университете Узбекистана до начальника отдела в международном вузе.</p>
               </div>
               <div className="p-8 bg-white border border-stone-100 rounded-lg shadow-sm">
                  <h3 className="font-serif font-bold text-2xl mb-4">Специализация</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Эксперт в области этики, эстетики, религиоведения и философии культуры с глубоким академическим бэкграундом.</p>
               </div>
               <div className="p-8 bg-white border border-stone-100 rounded-lg shadow-sm">
                  <h3 className="font-serif font-bold text-2xl mb-4">Образование</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">Выпускница и PhD НУУз им. Мирзо Улугбека. Свободно владеет русским, узбекским и английским языками.</p>
               </div>
            </div>
          </div>
        );

      case 'career':
        return (
          <div className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-bottom-8 duration-700">
            <header className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Профессиональный путь</h1>
              <div className="h-px w-24 bg-stone-300 mx-auto"></div>
            </header>
            
            <div className="relative border-l-2 border-stone-200 ml-4 md:ml-0 md:left-1/2">
              {CAREER_HISTORY.map((exp, idx) => (
                <div key={exp.id} className={`relative mb-12 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:left-[-50%]' : 'md:pl-12 md:left-[50%]'}`}>
                  <div className="absolute top-0 w-4 h-4 bg-stone-900 rounded-full border-4 border-white shadow-sm left-[-9px] md:left-auto md:right-[-9px] translate-x-0 md:translate-x-0" style={{ right: idx % 2 !== 0 ? 'auto' : '-9px', left: idx % 2 !== 0 ? '-9px' : 'auto' }}></div>
                  <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-bold text-stone-400 uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-lg font-bold text-stone-800 mt-2">{exp.position}</h3>
                    <p className="text-sm text-stone-600 italic mt-1">{exp.organization}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'books':
        return (
          <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
            <header className="border-b border-stone-200 pb-8">
              <h1 className="text-4xl font-serif font-bold text-stone-900">Публикации</h1>
              <p className="text-stone-500 mt-2 italic">Монографии и научные труды</p>
            </header>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {books.map((book) => (
                <div key={book.id} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-6 shadow-xl rounded-sm">
                    <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">{book.title}</h3>
                  <p className="text-stone-500 text-xs font-bold uppercase mt-1">{book.year}</p>
                  <p className="text-stone-600 text-sm mt-3 leading-relaxed">{book.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'presentations':
        return (
          <div className="space-y-8 animate-in slide-in-from-bottom-4">
             <header className="border-b border-stone-200 pb-8">
                <h1 className="text-4xl font-serif font-bold text-stone-900">Презентации</h1>
             </header>
             <div className="grid gap-4">
                {presentations.map(p => (
                  <div key={p.id} className="p-6 bg-white border border-stone-100 rounded-lg flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-stone-800">{p.title}</h3>
                      <p className="text-sm text-stone-500">{p.date}</p>
                    </div>
                    <button className="px-4 py-2 bg-stone-100 text-stone-800 text-xs font-bold uppercase rounded-sm hover:bg-stone-900 hover:text-white transition-all">Открыть PDF</button>
                  </div>
                ))}
             </div>
          </div>
        );

      case 'videos':
        return (
          <div className="space-y-12 animate-in slide-in-from-bottom-4">
             <header className="border-b border-stone-200 pb-8">
                <h1 className="text-4xl font-serif font-bold text-stone-900">Лекции</h1>
             </header>
             <div className="grid md:grid-cols-2 gap-12">
                {videos.map(v => (
                  <div key={v.id} className="space-y-4">
                    <div className="aspect-video bg-stone-200 rounded-lg overflow-hidden shadow-lg">
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${v.youtubeId}`}
                        title={v.title}
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-800">{v.title}</h3>
                  </div>
                ))}
             </div>
          </div>
        );

      case 'assistant':
        return (
          <div className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-bottom-4">
            <header className="text-center">
              <h1 className="text-4xl font-serif font-bold text-stone-900">Интеллектуальный помощник</h1>
              <p className="text-stone-500 mt-2">Персональный философский ассистент Ферузы Бозаровой</p>
            </header>
            <Assistant />
          </div>
        );

      case 'admin':
        return (
          <div className="animate-in fade-in duration-500">
            <AdminPanel 
              books={books} 
              presentations={presentations} 
              videos={videos} 
              onUpdateBooks={setBooks}
              onUpdatePresentations={setPresentations}
              onUpdateVideos={setVideos}
            />
          </div>
        );
        
      default:
        return <div>Section not found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-stone-200 selection:text-stone-900">
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 md:px-12 py-12 md:py-20">
        {renderSection()}
      </main>

      <footer className="border-t border-stone-200 py-16 px-6 md:px-12 bg-stone-50/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-stone-800">Феруза Бозарова</h2>
            <p className="text-sm text-stone-500 max-w-sm leading-relaxed">
              Академический ресурс, посвященный философии, культуре и поиску смыслов в современном мире.
            </p>
          </div>
          <div className="flex flex-col md:items-end space-y-4">
            <div className="flex space-x-6 text-sm font-bold uppercase tracking-widest text-stone-400">
              <button onClick={() => setActiveSection('admin')} className="hover:text-stone-800 transition-colors">Админ-панель</button>
              <a href="#" className="hover:text-stone-800 transition-colors">Telegram</a>
              <a href="#" className="hover:text-stone-800 transition-colors">Email</a>
            </div>
            <p className="text-xs text-stone-400 italic">© {new Date().getFullYear()} Феруза Бозарова. Разработано для просвещения.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
