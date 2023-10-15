import PaginaPadrao from './componentes/PaginaPadrao';
import Home from 'pages/Home';
import Pedidos from'pages/Pedidos'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
            <Route  path='/home' element={<Home/>} />
            <Route  path='/pedidos' element={<Pedidos/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}