import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ isSignedIn, setSignedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        setSignedIn(false);
        navigate('/signin');
    };

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-2xl font-bold">MyApp</Link>
                <div>
                    {isSignedIn ? (
                        <button onClick={handleLogout} className="ml-4 hover:underline">
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/signin" className="ml-4 hover:underline">
                                Sign In
                            </Link>
                            <Link to="/register" className="ml-4 hover:underline">
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
