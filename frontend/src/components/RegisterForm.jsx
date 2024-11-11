import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: { email, password, password_confirmation: passwordConfirmation } }),
        });

        if (response.ok) {
            alert('Registration successful! Please sign in.');
            navigate('/signin');
        } else {
            alert('Registration failed');
        }
    };

    return (
        <div className="flex justify-center mt-20">
            <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow-md">
                <h2 className="text-2xl mb-6">Register</h2>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="block w-full mb-4 p-2 border rounded" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="block w-full mb-4 p-2 border rounded" />
                <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" required className="block w-full mb-6 p-2 border rounded" />
                <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
