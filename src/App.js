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


function App() {
  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/login' element={< LoginPage />} />
            <Route exact path='/register' element={< RegisterPage />} />
            <Route exact path='/profile' element={< ProfilePage />} />

            <Route
              path="/login/shipping"
              element={<Navigate to="/shipping" />}
            />

            <Route exact path='/shipping' element={< ShippingPage />} />
            <Route exact path='/payment' element={< PaymentPage />} />
            <Route exact path='/placeorder' element={< PlaceOrderPage />} />
            <Route exact path='/cart' element={< CartPage />} />
            <Route exact path='/products/:id' element={< ProductPage />} />
            <Route exact path='/cart/:productId' element={< CartPage />} />
            <Route exact path='/order/:id' element={< OrderPage />} />

            <Route exact path='/admin/userlist' element={< UserListPage />} />
            <Route exact path='/admin/productlist' element={< ProductListPage />} />
            <Route exact path='/admin/user/:id/edit' element={< UserEditPage />} />
            <Route exact path='/admin/product/:id/edit' element={< ProductEditPage />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
