import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import LoginPage from './pages/auth/login/index.tsx'
import DashboardPage from './pages/dashboard/index.tsx'
import { Ecommerce } from './components/dashboard/ecommerce/index.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="/dashboard/ecommerce" element={<Ecommerce />} />{' '}
        {/* Sub-rota */}
      </Route>
      <Route path="/" element={<App />} />
      <Route path="*" element={<p>Rota não existente</p>} />
    </Routes>
  </BrowserRouter>,
)
