import react from 'react';
import './Button.css';

const Button = ({ children, ...rest }) => (
    <button className="btn btn-custom w-100" {...rest}>
        {children}
    </button>
);

export default Button;