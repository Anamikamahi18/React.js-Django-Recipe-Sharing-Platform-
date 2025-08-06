import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Login logic here
        alert("Logged in successfully!");
    };

    return (
        <formContainer>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <Button type="submit">Login</Button>
            </form>
            <div className="d-flex justify-content-between mt-3">
                <Link to="/reset">Forgot password? Reset</Link>
                <span>
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </div>  
        </formContainer>
    );
};

export default Login;