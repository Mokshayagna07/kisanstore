import React, { useState } from 'react';
import { MessageSquare, User, Clock, CheckCircle, Reply } from 'lucide-react';

const ComplaintManager = () => {
    const [complaints] = useState([
        { id: 'TKT-2023-891', customer: 'Rahul Verma', orderId: '#ORD-7829', issue: 'Wrong Item Delivered', status: 'Open', date: '2 mins ago', message: 'I ordered Kashmiri Apples but received Green Apples instead. Please resolve this.' },
        { id: 'TKT-2023-890', customer: 'Anita Singh', orderId: '#ORD-7812', issue: 'Quality Issue', status: 'In Progress', date: '2 hours ago', message: 'The potatoes delivered today seem to be old and sprouting. I need a replacement.' },
        { id: 'TKT-2023-888', customer: 'John Doe', orderId: '#ORD-7800', issue: 'Refund Not Received', status: 'Resolved', date: 'Yesterday', message: 'My cancelled order refund is still not credited to my wallet.' },
    ]);

    const [selectedTicket, setSelectedTicket] = useState(complaints[0]);

    return (
        <div className="flex h-[calc(100vh-140px)] gap-6">
            {/* List View */}
            <div className="w-1/3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-lg">Support Inbox</h3>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {complaints.map((ticket) => (
                        <div
                            key={ticket.id}
                            onClick={() => setSelectedTicket(ticket)}
                            className={`p-4 border-b border-slate-100 dark:border-slate-700 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors
                                ${selectedTicket.id === ticket.id ? 'bg-blue-50 dark:bg-slate-700/80 border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}
                            `}
                        >
                            <div className="flex justify-between mb-1">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ticket.status === 'Open' ? 'bg-red-100 text-red-700' :
                                        ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-green-100 text-green-700'
                                    }`}>{ticket.status}</span>
                                <span className="text-xs text-slate-400">{ticket.date}</span>
                            </div>
                            <h4 className="font-bold text-slate-800 dark:text-white truncate">{ticket.issue}</h4>
                            <p className="text-sm text-slate-500 truncate">{ticket.message}</p>
                            <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                                <User size={12} /> {ticket.customer} • {ticket.orderId}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detail View */}
            <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 flex flex-col">
                <div className="flex justify-between items-start mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h2 className="text-xl font-bold text-slate-800 dark:text-white">{selectedTicket.issue}</h2>
                            <span className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{selectedTicket.id}</span>
                        </div>
                        <p className="text-sm text-slate-500">
                            Raised by <span className="font-medium text-slate-700 dark:text-slate-200">{selectedTicket.customer}</span> for Order <span className="font-medium text-blue-600">{selectedTicket.orderId}</span>
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                            <CheckCircle size={16} /> Mark Resolved
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <p className="text-slate-800 dark:text-slate-200 leading-relaxed">
                            {selectedTicket.message}
                        </p>
                    </div>

                    <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-600">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Internal Note • Admin System</p>
                        <p className="text-sm text-slate-500">Automated check: Order #{selectedTicket.orderId.replace('#', '')} was marked as delivered yesterday at 5:00 PM by Drive Ramesh.</p>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Reply to Customer</label>
                    <textarea
                        className="w-full h-24 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                        placeholder="Type your response here..."
                    ></textarea>
                    <div className="flex justify-end mt-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                            <Reply size={16} /> Send Reply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintManager;
