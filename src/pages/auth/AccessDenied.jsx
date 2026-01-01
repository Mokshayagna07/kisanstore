import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const AccessDenied = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 text-center border border-slate-200 dark:border-slate-700">
                <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldAlert size={40} className="text-red-500" />
                </div>

                <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Access Restricted</h1>
                <p className="text-slate-500 dark:text-slate-400 mb-8">
                    You do not have permission to view this page. This area is restricted to authorized roles only.
                </p>

                <button
                    onClick={() => navigate(-1)}
                    className="btn bg-slate-800 hover:bg-slate-700 text-white w-full flex items-center justify-center gap-2 py-3 rounded-xl"
                >
                    <ArrowLeft size={18} />
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default AccessDenied;
