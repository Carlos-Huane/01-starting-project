import {Route} from 'react-router-dom';
import Products from './Pages/Products';
import Welcome from './Pages/Welcome';
import MainHeader from './Components/MainHeader';
import ProductDetail from './Pages/ProductDetail';
function App() {
  //cambios
  return (
    <div>
      
      <MainHeader />
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail />
      </Route>
    </div>
  );
}

export default App;
