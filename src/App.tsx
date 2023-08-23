
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './components/Products';
import OneProducts from './components/OneProducts';


function App() {
return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Product />} />
  <Route path="/product/:id" element={<OneProducts />} />
  </Routes>
  </BrowserRouter>
)
}

export default App;