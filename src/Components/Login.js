import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();

    async function handleLogin(e) {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
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
                            <Form.Control type='email' ref={emailRef} ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className='fs-5'>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} ></Form.Control>
                        </Form.Group>

                        <Button type='submit' className='mt-4 w-100' disabled={loading}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>

                <p className='text-center mt-3'>Create account <Link to='/signup'>Sign up</Link> </p>
            </Card>
        </div>
    )
};
 
export default Login;