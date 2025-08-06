import React from 'react';
import './FormContainer.css';

const FormContainer = ({ children }) => (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
                <div className="card shadow-sm-p-4 form-container">
                    {children}
                </div>
            </div>
        </div>
    </div>
);
export default FormContainer;