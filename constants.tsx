
import { Book, Presentation, Video, Experience } from './types';

export const INITIAL_BOOKS: Book[] = [
  {
    id: '1',
    title: 'Философия повседневности',
    year: '2021',
    description: 'О смысле, свободе и выборе в обычной жизни человека. Исследование того, как малые действия формируют великие судьбы.',
    link: '#',
    coverImage: 'https://picsum.photos/seed/philosophy1/400/600'
  }
];

export const INITIAL_PRESENTATIONS: Presentation[] = [
  {
    id: 'p1',
    title: 'Философия культуры: вводная лекция',
    description: 'Краткий обзор основных понятий и подходов к изучению культурных феноменов.',
    link: '#',
    date: '12 Октября 2023'
  }
];

export const INITIAL_VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Что такое философия сегодня?',
    description: 'Вводная лекция для широкой аудитории. Почему философия остается актуальной в век технологий.',
    youtubeId: 'dQw4w9WgXcQ'
  }
];

export const CAREER_HISTORY: Experience[] = [
  { id: '1', period: '2024 — н.в.', position: 'Начальник отдела по делам молодежи, духовности и просвещения', organization: 'Филиал Казанского федерального университета в г. Джизаке' },
  { id: '2', period: '2023 — 2024', position: 'И.о. доцента кафедры социальных наук', organization: 'Филиал КФУ в г. Джизаке' },
  { id: '3', period: '2022 — 2023', position: 'И.о. заведующего кафедрой социальных наук', organization: 'Филиал КФУ в г. Джизаке' },
  { id: '4', period: '2021 — 2022', position: 'И.о. доцента кафедры социально-гуманитарных наук', organization: 'Университет Аль-Бухари' },
  { id: '5', period: '2019 — 2021', position: 'И.о. доцента кафедры основ философии и духовности', organization: 'Национальный университет Узбекистана' },
  { id: '6', period: '2018 — 2019', position: 'И.о. заведующего кафедрой основ духовности и религиоведения', organization: 'НУУз' },
  { id: '7', period: '2013 — 2018', position: 'Преподаватель, старший преподаватель кафедры этики и эстетики', organization: 'НУУз' },
  { id: '8', period: '2002 — 2013', position: 'Студент, магистрант, докторант', organization: 'Национальный университет Узбекистана им. Мирзо Улугбека' }
];
