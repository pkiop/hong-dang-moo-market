import Main from './pages/Main';
import Category from './pages/Category';
import Auth from './pages/Auth';
// import Counter from './pages/Counter';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/reset.scss';
import './styles/global-style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
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
  );
}

export default App;
