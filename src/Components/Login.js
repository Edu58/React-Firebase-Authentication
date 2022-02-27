import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    //redirect to home after successfull login
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();

    async function handleLogin(e) {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        try {
            setError("")
            setLoading(true)
            await login(email, password)
            navigate('/');
        }catch {
            setError("Failed to login!!!")
        }
        
        setLoading(false)
    }

    return (      
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Card>
                <Card.Header className="fs-2 fw-bolder text-center mb-1">Login</Card.Header>
                {error && <Alert variant="danger" className='text-center'>{error}</Alert>}
                <Card.Body>
                    <Form onSubmit={handleLogin}>
                        <Form.Group id="email">
                            <Form.Label className='fs-5'>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className='fs-5'>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required></Form.Control>
                        </Form.Group>

                        <Button type='submit' className='mt-4 w-100' disabled={loading}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>

                <Link className='text-center' to={'/forgot-password'}>forgot password</Link>
                <p className='text-center mt-3'>Create account <Link to='/signup'>Sign up</Link> </p>
            </Card>
        </div>
    )
};
 
export default Login;