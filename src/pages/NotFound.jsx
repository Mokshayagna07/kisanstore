import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-9xl font-bold text-primary mb-4 opacity-20">404</h1>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Page Not Found</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
    );
};

export default NotFound;
