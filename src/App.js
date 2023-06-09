import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductsView from './Views/ProductsView'
import DetailProductView from './Views/DetailProductView';
import CartView from './Views/CartView';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment >
      <div className="AppFragment">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ProductsView />} />
              <Route path='/products/detail/:idProduct' element={<DetailProductView />} />
              <Route path='/category/:category' element={<ProductsView />} />
              <Route path='/cart' element={<CartView />} />
              <Route path='*' element={<h1>Error 404 Not Found</h1>} />
            </Routes>
            <Footer />
          </CartProvider>
        </BrowserRouter>
      </div>
    </Fragment>

  );
}

export default App;
