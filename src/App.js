import ProductHome from '../src/components/ProductHome';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from '../src/reducers/index';
import Header from '../src/components/Header/header';
import CartPage from '../src/components/ShoppingCart/CartPage';
import ItemDetail from '../src/components/Items/ItemDetails';
import './App.css';

const store = createStore(rootReducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={'/'} render={() => {
              return <Redirect to={'/products'} />
            }} />
            <Route exact path={'/products'} component={ProductHome} />
            <Route exact path={'/products/:id'} component={ItemDetail} />
            <Route exact patr={'/cart'} component={CartPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
