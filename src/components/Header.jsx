import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="max-w-7xl mx-auto bg-gray-300 p-5 flex gap-8 sticky top-0">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Resgister</Link>
        </div>
    );
};

export default Header;