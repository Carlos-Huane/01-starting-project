import {Route, Switch,Redirect} from 'react-router-dom';
import Products from './Pages/Products';
import Welcome from './Pages/Welcome';
import MainHeader from './Components/MainHeader';
import ProductDetail from './Pages/ProductDetail';
function App() {
  //cambios
  return (
    <div>
      
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>

        <Route path="/products">
          <Products />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product/:productId" exact>
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
