import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'><ItemListContainer /></Route>
          <Route path='/cat/:catId'><ItemListContainer /></Route>
          <Route path='/item/:itemId'><ItemDetailContainer /></Route>
          <Route path='/cart'><Cart/></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
