import { Container } from 'react-bootstrap'
import { Routes, Route, Navigate } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import UserListPage from './pages/UserListPage'
import UserEditPage from './pages/UserEditPage'
import ProductListPage from './pages/ProductListPage'
import ProductEditPage from './pages/ProductEditPage'
import SplashPage from './pages/SplashPage'


function App() {



  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<SplashPage />} />
            <Route exact path='/thue' element={<HomePage />} />
            <Route exact path='/thue/login' element={< LoginPage />} />
            <Route exact path='/thue/register' element={< RegisterPage />} />
            <Route exact path='/thue/profile' element={< ProfilePage />} />

            <Route
              path="/thue/login/shipping"
              element={<Navigate to="/thue/shipping" />}
            />
            <Route
              path="/favicon.ico"
              element={<Navigate to="/" />}
            />

            <Route exact path='/thue/shipping' element={< ShippingPage />} />
            <Route exact path='/thue/payment' element={< PaymentPage />} />
            <Route exact path='/thue/placeorder' element={< PlaceOrderPage />} />
            <Route exact path='/thue/cart' element={< CartPage />} />
            <Route exact path='/thue/products/:id' element={< ProductPage />} />
            <Route exact path='/thue/cart/:productId' element={< CartPage />} />
            <Route exact path='/thue/order/:id' element={< OrderPage />} />

            <Route exact path='/thue/admin/userlist' element={< UserListPage />} />
            <Route exact path='/thue/admin/productlist' element={< ProductListPage />} />
            <Route exact path='/thue/admin/user/:id/edit' element={< UserEditPage />} />
            <Route exact path='/thue/admin/product/:id/edit' element={< ProductEditPage />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
