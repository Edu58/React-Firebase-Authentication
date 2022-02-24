import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/signup';
import { Container } from 'react-bootstrap';
import AuthProvider from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <SignUp />
      </Container>
    </AuthProvider>
  );
}

export default App;
