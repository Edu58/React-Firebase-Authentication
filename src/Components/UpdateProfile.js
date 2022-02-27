import {Form, Button, Card, Alert} from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    //redirect to login after successfull sign up
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup, currentUser, updateUserEmail, updateUserPassword } = useAuth();

    function handleProfileUpdate(e) {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        const promises = [];

        setLoading(false)
        setError('')

        if (email !== currentUser.email) {
            promises.push(updateUserEmail(email))
        }

        if (password) {
            promises.push(updateUserPassword(email, password))
        }

        Promise.all(promises).then(
            () => {
                navigate('/')
            }
        ).catch(
            () => {
                setError('Failed to update profile')
            }
        ).finally(
            () => {
                setLoading(false)
            }
        )
        
        try {
            setError("")
            setLoading(true)
            signup(email, password)
            navigate('/login')
        }catch {
            setError("Account creation failed!!!")
        }
        
        setLoading(false)
    }

    return (      
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <Card>
                <Card.Header className="fs-2 fw-bolder text-center mb-1">Update Profile</Card.Header>
                {error && <Alert variant="danger" className='text-center'>{error}</Alert>}
                <Card.Body>
                    <Form onSubmit={handleProfileUpdate}>
                        <Form.Group id="email">
                            <Form.Label className='fs-5'>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label className='fs-5'>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} placeholder="Leave blank to keep the same"></Form.Control>
                        </Form.Group>
                        <Form.Group id="password_confirm">
                            <Form.Label className='fs-5'>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} placeholder="Leave blank to keep the same"></Form.Control>
                        </Form.Group>

                        <Button type='submit' className='mt-4 w-100' disabled={loading}>
                            Update Profile
                        </Button>
                    </Form>
                </Card.Body>

                <Link className='text-center mb-2' to={'/'}>Cancel</Link>
            </Card>
        </div>
    )
};
 
export default UpdateProfile;