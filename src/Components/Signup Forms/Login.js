import {
    Card,
    Form,
    Button,
    Alert,
} from "react-bootstrap";
import { React, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../../firebase/AuthContext";

import "./StyleSheets/forms.css";

export default function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const { login } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        setError("");
        setMessage("");
        setLoading(true);

        try {
            const email = emailRef.current.value;
            const password = passwordRef.current.value;

            if (email === "" || password === "") {
                setError("Please fill in all fields");
                setLoading(false);
                return;
            } else {
                try{
                    await login(email, password);
                    navigate("/");
                } catch(error){
                    setError("Failed to login!");
                    setLoading(false);
                }
            }

        } catch(error) {
            setError(error);
        }
    }
    
    return (
    <>
        <Card className="w-50 m-auto mt-5 form-container">
            <Card.Body className="w-75">
                <Card.Title className="form-title">Login</Card.Title>
                <Form className="form-entry">
                    <Form.Group controlId="userEmail" className="form-group">
                        <Form.Label className="form-label">Email</Form.Label>
                        <Form.Control className="form-input" type="email" placeholder="Enter email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group controlId="userPassword" className="form-group">
                        <Form.Label className="form-label">Password</Form.Label>
                        <Form.Control className="form-input" type="password" placeholder="Enter Password" ref={passwordRef} required/>
                    </Form.Group>
                </Form>
                <Form.Group className="form-group">
                    <Button className="form-submit-button" variant="primary" type="submit" onClick={handleSubmit} disabled={loading}>Submit</Button>
                    <p className="text-center mt-2">Don't have an account? <Link to="/signup">Sign Up Here</Link></p>
                </Form.Group>

                {error && <Alert variant="danger" className="error-message form-message">{error}</Alert>}
                {message && <Alert variant="success" className="success-message form-message">{message}</Alert>}
            </Card.Body>
        </Card>
    </>
  )
}

