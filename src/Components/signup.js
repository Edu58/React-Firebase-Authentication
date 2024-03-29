import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    //redirect to login after successfull sign up
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const password_confirm = passwordConfirmRef.current.value;

        if (password !== password_confirm || password === '' || password_confirm === '') {
            return setError("Passwords do not match")
        }
        
        try {
            setError("")
            setLoading(true)
            await signup(email, password)
            navigate('/login')
        }catch {
            setError("Account creation failed!!!")
        }
        
        setLoading(false)
    }

    return (      
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Card>
                <Card.Header className="fs-2 fw-bolder text-center mb-1">Sign up</Card.Header>
                {error && <Alert variant="danger" className='text-center'>{error}</Alert>}
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className='fs-5'>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className='fs-5'>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password_confirm">
                            <Form.Label className='fs-5'>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>

                        <Button type='submit' className='mt-4 w-100' disabled={loading}>
                            Sign up
                        </Button>
                    </Form>
                </Card.Body>

                <p className='text-center mt-3'>Already have an account? <Link to='/login'>Login</Link></p>
            </Card>
        </div>
     );
}
 
export default SignUp; 