import React, { useState } from 'react';
import { LayoutDashboard, ShoppingBag, Package, LogOut, Check, X as XIcon, Edit, Plus, Trash } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    // Mock Data State
    const [orders, setOrders] = useState([
        { id: 101, customer: "Ramesh Kumar", items: "Tomatoes (5kg), Rice (25kg)", total: 2450, status: "Pending", date: "2024-03-20" },
        { id: 102, customer: "Suresh Reddy", items: "Fertilizer (10L)", total: 4200, status: "Confirmed", date: "2024-03-19" },
        { id: 103, customer: "Priya Singh", items: "Seeds (5 pkt)", total: 850, status: "Shipped", date: "2024-03-18" },
    ]);

    const [products, setProducts] = useState([
        { id: 1, name: "Desi Country Chicken", category: "Poultry", stock: 45, price: 650 },
        { id: 2, name: "Organic Tomatoes", category: "Vegetables", stock: 120, price: 45 },
        { id: 3, name: "Kashmiri Apples", category: "Fruits", stock: 8, price: 280 }, // Low stock example
    ]);

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stock: '' });

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const updateOrderStatus = (id, newStatus) => {
        setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const product = {
            id: products.length + 1,
            ...newProduct,
            price: Number(newProduct.price),
            stock: Number(newProduct.stock)
        };
        setProducts([...products, product]);
        setIsAddModalOpen(false);
        setNewProduct({ name: '', category: '', price: '', stock: '' });
    };

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const updateStock = (id, newStock) => {
        setProducts(products.map(p => p.id === id ? { ...p, stock: Number(newStock) } : p));
    };

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-slate-900 font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 hidden lg:flex flex-col">
                <div className="p-6">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-white">Admin Panel</h1>
                    <p className="text-xs text-slate-500 mt-1">Manage Store</p>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
                    >
                        <LayoutDashboard size={20} /> Dashboard
                    </button>
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'products' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
                    >
                        <Package size={20} /> Inventory
                    </button>
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'orders' ? 'bg-primary/10 text-primary' : 'text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700'}`}
                    >
                        <ShoppingBag size={20} /> Orders
                    </button>
                </nav>
                <div className="p-4 border-t border-gray-200 dark:border-slate-700">
                    <button onClick={handleLogout} className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl font-medium transition-colors">
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 lg:p-8">

                {/* DASHBOARD TAB */}
                {activeTab === 'dashboard' && (
                    <div className="animate-fade-in-up">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {[
                                { title: "Total Sales", value: "₹1,24,500", color: "text-blue-600 bg-blue-50" },
                                { title: "Pending Orders", value: orders.filter(o => o.status === 'Pending').length, color: "text-orange-600 bg-orange-50" },
                                { title: "Low Stock Items", value: products.filter(p => p.stock < 10).length, color: "text-red-600 bg-red-50" },
                                { title: "Total Products", value: products.length, color: "text-green-600 bg-green-50" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
                                    <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">{stat.title}</h3>
                                    <p className={`text-3xl font-bold ${stat.color} bg-transparent`}>{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* PRODUCTS TAB */}
                {activeTab === 'products' && (
                    <div className="animate-fade-in-up">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Inventory Management</h2>
                            <button onClick={() => setIsAddModalOpen(true)} className="btn btn-primary text-sm gap-2">
                                <Plus size={18} /> Add Stock
                            </button>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-300">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Product Name</th>
                                        <th className="px-6 py-4 font-medium">Category</th>
                                        <th className="px-6 py-4 font-medium">Price (₹)</th>
                                        <th className="px-6 py-4 font-medium">Stock Level</th>
                                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                                    {products.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50">
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{product.name}</td>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{product.category}</td>
                                            <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">₹{product.price}</td>
                                            <td className="px-6 py-4">
                                                <input
                                                    type="number"
                                                    value={product.stock}
                                                    onChange={(e) => updateStock(product.id, e.target.value)}
                                                    className={`w-20 p-1 border rounded text-center ${product.stock < 10 ? 'border-red-300 bg-red-50 text-red-600' : 'border-gray-200 text-slate-700'}`}
                                                />
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors">
                                                    <Trash size={18} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* ORDERS TAB */}
                {activeTab === 'orders' && (
                    <div className="animate-fade-in-up">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Order Management</h2>
                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-300">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Order ID</th>
                                        <th className="px-6 py-4 font-medium">Customer</th>
                                        <th className="px-6 py-4 font-medium">Items</th>
                                        <th className="px-6 py-4 font-medium">Status</th>
                                        <th className="px-6 py-4 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                                    {orders.map((order) => (
                                        <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50">
                                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">#{order.id}</td>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                                                <div className="font-medium text-slate-900 dark:text-white">{order.customer}</div>
                                                <div className="text-xs">{order.date}</div>
                                            </td>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-400 max-w-xs truncate">{order.items}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${order.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                                                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                            'bg-blue-100 text-blue-700'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 flex gap-2">
                                                {order.status === 'Pending' && (
                                                    <>
                                                        <button
                                                            onClick={() => updateOrderStatus(order.id, 'Confirmed')}
                                                            className="flex items-center gap-1 bg-green-50 text-green-600 px-3 py-1.5 rounded-lg hover:bg-green-100 font-medium transition-colors"
                                                        >
                                                            <Check size={16} /> Accept
                                                        </button>
                                                        <button
                                                            onClick={() => updateOrderStatus(order.id, 'Cancelled')}
                                                            className="flex items-center gap-1 bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 font-medium transition-colors"
                                                        >
                                                            <XIcon size={16} /> Reject
                                                        </button>
                                                    </>
                                                )}
                                                {order.status === 'Confirmed' && (
                                                    <button
                                                        onClick={() => updateOrderStatus(order.id, 'Shipped')}
                                                        className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 font-medium transition-colors"
                                                    >
                                                        <Package size={16} /> Ship Order
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>

            {/* Add Product Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-fade-in-up">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Add New Product</h3>
                            <button onClick={() => setIsAddModalOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full">
                                <XIcon size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Product Name</label>
                                <input required type="text" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} className="w-full p-2 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Category</label>
                                <select required value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} className="w-full p-2 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50">
                                    <option value="">Select Category</option>
                                    <option value="Vegetables">Vegetables</option>
                                    <option value="Fruits">Fruits</option>
                                    <option value="Poultry">Poultry</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Price (₹)</label>
                                    <input required type="number" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} className="w-full p-2 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Stock Qty</label>
                                    <input required type="number" value={newProduct.stock} onChange={e => setNewProduct({ ...newProduct, stock: e.target.value })} className="w-full p-2 bg-gray-50 dark:bg-slate-700 rounded-lg outline-none focus:ring-2 ring-primary/50" />
                                </div>
                            </div>
                            <button className="w-full btn btn-primary mt-4">Add Product</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
