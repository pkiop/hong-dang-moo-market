import Main from './pages/Main';
import Category from './pages/Category';
// import Counter from './pages/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/reset.scss';
import './styles/global-style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/category'>
          <Category />
        </Route>
        <Route path='/'>
          <Main />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
