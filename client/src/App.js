import Main from './pages/Main';
import Category from './pages/Category';
// import Counter from './pages/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/reset.scss';
import './styles/global-style.scss';
import { useState } from 'react';

function App() {
  const [selectedPage, setSelectedPage] = useState('main'); // main, category 가 올 수 있음.

  const buttonList = [
    { title: '홈', color: 'red', onClick: () => setSelectedPage('main') },
    { title: '검색', color: 'blue', onClick: () => {} },
    {
      title: '카테고리',
      color: 'yellow',
      onClick: () => setSelectedPage('category'),
    },
    {
      title: '내글',
      color: 'green',
      onClick: () => {},
    },
  ];

  return (
    <div>
      <Header />
      {selectedPage === 'main' && <Main></Main>}
      {selectedPage === 'category' && <Category></Category>}
      <Footer buttonList={buttonList} />
    </div>
  );
}

export default App;
