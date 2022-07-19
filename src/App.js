import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'


function App() {
  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/products/:id' element={< ProductPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
