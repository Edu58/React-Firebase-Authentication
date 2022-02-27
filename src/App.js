import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoutes';
import SignUp from './Components/signup';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import UpdateProfile from './Components/UpdateProfile';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
          <Routes>

            <Route path='/' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />

            <Route path='/update-profile' element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>} />

            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
