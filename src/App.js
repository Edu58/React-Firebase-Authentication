import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/signup';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import { Container } from 'react-bootstrap';
import AuthProvider from './Context/AuthContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Container>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Container>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
