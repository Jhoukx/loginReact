import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPages from './pages/RegisterPages';
import Profile from './pages/Profile';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/account/login" element={<LoginPage />} />
          <Route path="/account/register" element={<RegisterPages />} />
          <Route path='/profile' element={ <Profile/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
