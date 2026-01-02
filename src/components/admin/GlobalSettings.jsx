import React from 'react';
import { Settings } from 'lucide-react';

const GlobalSettings = () => {
    const toggles = [
        { label: 'New Seller Registration', desc: 'Allow new farmers to sign up', checked: true },
        { label: 'Maintenance Mode', desc: 'Suspend all user operations temporarily', checked: false },
        { label: 'Auto-Approve Products', desc: 'Skip staff verification for known sellers', checked: false },
    ];

    return (
        <div className="max-w-4xl space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 p-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <Settings className="text-slate-500" /> Platform Configuration
                </h3>

                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Platform Commission (%)</label>
                            <input type="number" defaultValue={10} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-800 dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Tax Rate (GST %)</label>
                            <input type="number" defaultValue={18} className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-800 dark:text-white" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-3">Feature Toggles</label>
                        <div className="space-y-3">
                            {toggles.map((toggle, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-700">
                                    <div>
                                        <p className="font-bold text-sm text-slate-800 dark:text-white">{toggle.label}</p>
                                        <p className="text-xs text-slate-500">{toggle.desc}</p>
                                    </div>
                                    <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${toggle.checked ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`}>
                                        <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${toggle.checked ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-end">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalSettings;
