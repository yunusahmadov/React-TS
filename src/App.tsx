
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Product from './components/Products';
import OneProducts from './components/OneProducts';
import Users from './components/Users';
import DetailUser from './components/DetailUser';


function App() {
return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Users />} />
  <Route path="/user/:id" element={<DetailUser />} /> 

  {/* <Route path="/" element={<Product />} />
  <Route path="/product/:id" element={<OneProducts />} /> */}
  </Routes>
  </BrowserRouter>
)
}

export default App;