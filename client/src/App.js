import Main from './pages/Main';
import Category from './pages/Category';
import Auth from './pages/Auth';
// import Counter from './pages/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/reset.scss';
import './styles/global-style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useReducer, createContext } from 'react';
// 프로젝트 환경변수 설정을 위해 (.env 파일의 변수를 가지고옴)
import dotenv from 'dotenv';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
dotenv.config();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        username: action.payload.username,
        location: action.payload.location,
      };
    case 'signout':
      return { username: '', location: '' };
    default:
      throw new Error();
  }
};

export const UserContext = createContext(null);

function App() {
  const [user, dispatch] = useReducer(userReducer, {
    username: '',
    location: '',
  });

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <Router>
        <Header />
        <Switch>
          <Route path='/category'>
            <Category />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/auth'>
            <Auth />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
