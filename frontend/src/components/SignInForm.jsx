import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = ({ setSignedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/users/sign_in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: { email, password } }),
        });

        if (response.ok) {
            const token = response.headers.get('Authorization');
            localStorage.setItem('jwt', token);
            setSignedIn(true);
            navigate('/');
        } else {
            alert('Sign in failed');
        }
    };

    return (
        <div className="flex justify-center mt-20">
            <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded shadow-md">
                <h2 className="text-2xl mb-6">Sign In</h2>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="block w-full mb-4 p-2 border rounded" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="block w-full mb-6 p-2 border rounded" />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Sign In</button>
            </form>
        </div>
    );
};

export default SignInForm;
