import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './scenes/dashboard';
import TopBar from './components/TopBar';
import ProductForm from './scenes/productForm';

function App() {

  return (
    <>
      <div>
        <main className="main"style={{paddingTop: '60px'}}>
          <TopBar/>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/add_products' element={<ProductForm/>}/>
            <Route path='/add_products/:id' element={<ProductForm/>}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
