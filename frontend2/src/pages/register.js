import React from 'react'
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormConatiner';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Registration logic here
        alert('registered successfully!');
    };

    return (
        <formContainer>
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
                <InputField
                  label="Username"
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
                <InputField 
                  label="Name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={form.email}  
                  onChange={handleChange}
                  required
                />  
                <InputField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <Button type="submit">Register</Button>
            </form>
            <div className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </formContainer>
    );
};

export default Register;