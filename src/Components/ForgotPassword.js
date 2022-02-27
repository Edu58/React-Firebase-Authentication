import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const { forgotPassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const emailRef = useRef();

    async function handleForgotPassword(e) {
        e.preventDefault()

        const email = emailRef.current.value;
        
        try {
            setError("")
            setLoading(true)
            await forgotPassword(email)
            setMessage('Check your inbox for further instructions')
        }catch {
            setError("Failed to reset password")
            setMessage('');
        }
        
        setLoading(false)
    }

    return (      
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Card>
                <Card.Header className="fs-2 fw-bolder text-center mb-1">Forgot Password
                </Card.Header>
                {error && <Alert variant="danger" className='text-center'>{error}</Alert>}
                {message && <Alert variant="success" className='text-center'>{message}</Alert>}
                <Card.Body>
                    <Form onSubmit={handleForgotPassword}>
                        <Form.Group id="email">
                            <Form.Label className='fs-5'>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} ></Form.Control>
                        </Form.Group>

                        <Button type='submit' className='mt-4 w-100' disabled={loading}>
                            Reset Password
                        </Button>
                    </Form>
                </Card.Body>

                <Link className='text-center mb-2' to={'/login'}>Login</Link>
            </Card>
        </div>
    )
};
 
export default ForgotPassword;