import React, { useState } from 'react';
import {
    Settings,
    Users,
    DollarSign,
    LayoutTemplate,
    ShieldAlert,
    Bell,
    Webhook,
    Globe,
    Database,
    AlertTriangle,
    ChevronRight,
    Save,
    AlertOctagon,
    Server
} from 'lucide-react';

const GlobalSettings = () => {
    const [activeTab, setActiveTab] = useState('platform');
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

    const categories = [
        { id: 'platform', label: 'Platform Settings', icon: Settings, desc: 'Core system toggles & maintenance' },
        { id: 'users', label: 'User & Seller Rules', icon: Users, desc: 'Verification & roles policies' },
        { id: 'financial', label: 'Financial & Commission', icon: DollarSign, desc: 'Tax, payouts & currency' },
        { id: 'content', label: 'Content & Marketplace', icon: LayoutTemplate, desc: 'Banners, categories & SEO' },
        { id: 'security', label: 'Security & Compliance', icon: ShieldAlert, desc: '2FA, sessions & IP rules' },
        { id: 'notifications', label: 'Notifications & Alerts', icon: Bell, desc: 'Email, SMS & incidents' },
        { id: 'integrations', label: 'Integrations & Services', icon: Webhook, desc: 'Gateways, webhooks & APIs' },
        { id: 'localization', label: 'Localization', icon: Globe, desc: 'Languages, zones & formats' },
        { id: 'maintenance', label: 'Maintenance & Backup', icon: Database, desc: 'Backups, restores & updates' },
    ];

    const Toggle = ({ label, desc, checked = false }) => (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex-1 pr-4">
                <h4 className="text-sm font-bold text-slate-800 dark:text-gray-100">{label}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
            </div>
            <button
                onClick={() => setHasUnsavedChanges(true)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${checked ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
        </div>
    );

    const Select = ({ label, desc, options }) => (
        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <label className="block text-sm font-bold text-slate-800 dark:text-gray-100 mb-1">{label}</label>
            <p className="text-xs text-slate-500 mb-3">{desc}</p>
            <select className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-gray-200">
                {options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                ))}
            </select>
        </div>
    );

    const Input = ({ label, desc, placeholder, type = "text" }) => (
        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <label className="block text-sm font-bold text-slate-800 dark:text-gray-100 mb-1">{label}</label>
            <p className="text-xs text-slate-500 mb-3">{desc}</p>
            <input type={type} placeholder={placeholder} className="w-full p-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-gray-200" />
        </div>
    );

    const SectionHeader = ({ title, description }) => (
        <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white capitalize">{title}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'platform':
                return (
                    <div className="space-y-6">
                        <SectionHeader title="Platform Settings" description="Control system-wide availability and core operational flows." />
                        <div className="grid grid-cols-1 gap-4">
                            <Toggle label="Maintenance Mode" desc="Suspends all user-facing operations. Admins can still access the dashboard." checked={false} />
                            <Toggle label="User Registration" desc="Allow new customers to sign up. Detailed verification rules apply." checked={true} />
                            <Toggle label="Seller Onboarding" desc="Allow new farmers/sellers to register. Requires document verification." checked={true} />
                            <Select label="Order Approval Workflow" desc="Choose how orders are processed after placement." options={['Automatic Approval', 'Manual Admin Review', 'Seller Approval Required']} />
                            <Toggle label="Marketplace Visibility" desc="Globally show/hide the product catalog to non-logged-in users." checked={true} />
                        </div>
                    </div>
                );
            case 'users':
                return (
                    <div className="space-y-6">
                        <SectionHeader title="User & Seller Rules" description="Define policies for account creation, verification, and suspension." />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Select label="Default User Role" desc="Role assigned to new email signups." options={['Customer (Buyer)', 'Guest', 'Requires Assignment']} />
                            <Toggle label="Mandatory Seller Verification" desc="Require government ID upload before sellers can list products." checked={true} />
                            <Input label="Max Active Listings" desc="Limit per unverified seller account." placeholder="e.g. 50" type="number" />
                            <Select label="Account Suspension Policy" desc="Action triggers upon multiple report flags." options={['Manual Review Only', 'Auto-Suspend after 3 Flags', 'Auto-Suspend after 5 Flags']} />
                        </div>
                    </div>
                );
            case 'financial':
                return (
                    <div className="space-y-6">
                        <SectionHeader title="Financial & Commission" description="Configure platform revenue models and payout structures." />
                        <div className="p-4 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 rounded-r-lg mb-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="text-amber-600 dark:text-amber-500 shrink-0" size={20} />
                                <div>
                                    <h4 className="text-sm font-bold text-amber-800 dark:text-amber-400">Critical Configuration Area</h4>
                                    <p className="text-xs text-amber-700/80 dark:text-amber-500/80 mt-1">Changes here directly affect revenue calculation. Ensure all tax laws are complied with before saving.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Platform Commission (%)" desc="Percentage taken from each order subtotal." placeholder="e.g. 5.0" type="number" />
                            <Input label="Tax Rate (GST/VAT) %" desc="Applicable tax on commission fees." placeholder="e.g. 18.0" type="number" />
                            <Select label="Payout Frequency" desc="Automated settlement schedule for sellers." options={['Weekly (Monday)', 'Bi-Weekly', 'Monthly (1st)']} />
                            <Input label="Minimum Payout Threshold" desc="Minimum balance required for auto-transfer." placeholder="e.g. ₹1000" type="number" />
                        </div>
                    </div>
                );
            case 'content':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <SectionHeader title="Content & Marketplace" description="Manage homepage visuals, banners, and public-facing content." />

                        {/* 1. Homepage Hero Banner */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                                <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide">Hero Banner Slides</h3>
                                <button className="text-xs flex items-center gap-1 text-primary font-bold hover:underline">
                                    + Add New Slide
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Slide 1 */}
                                <div className="group relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-all">
                                    <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800" alt="Banner 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-2 right-2 flex gap-1">
                                        <span className="px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded uppercase">Active</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-xs font-bold truncate">Summer Harvest Sale</p>
                                        <p className="text-white/70 text-[10px] truncate">Link: /collections/summer-sale</p>
                                    </div>
                                </div>
                                {/* Slide 2 */}
                                <div className="group relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary transition-all">
                                    <img src="https://images.unsplash.com/photo-1605000797499-95a059c995c8?auto=format&fit=crop&q=80&w=800" alt="Banner 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-2 right-2 flex gap-1">
                                        <span className="px-2 py-0.5 bg-slate-500 text-white text-[10px] font-bold rounded uppercase">Draft</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white text-xs font-bold truncate">Organic Tools Promo</p>
                                        <p className="text-white/70 text-[10px] truncate">Link: /collections/tools</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Announcement Bar */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">Top Announcement Bar</h3>
                            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 grid gap-4">
                                <Toggle label="Enable Announcement Bar" desc="Show a sticky notification bar at the top of the site." checked={true} />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="md:col-span-2">
                                        <Input label="Announcement Text" desc="Message to display." placeholder="Free Shipping on orders over ₹500!" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-sm font-bold text-slate-800 dark:text-gray-100 mb-1">Background Color</label>
                                        <div className="flex gap-2 h-10 items-center">
                                            <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-slate-200 cursor-pointer ring-2 ring-offset-2 ring-primary"></div>
                                            <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-slate-200 cursor-pointer"></div>
                                            <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-slate-200 cursor-pointer"></div>
                                            <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-200 cursor-pointer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Featured Categories */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">Featured Sections</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Select label="Homepage Layout" desc="Choose the visual structure." options={['Standard (Banner + Cats + Products)', 'Minimal (Search focused)', 'Marketplace (Category intense)']} />
                                <Input label="Featured Categories" desc="Comma separated slugs of categories to highlight." placeholder="seeds, organic-fertilizers, tools, machinery" />
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-bold text-sm text-slate-800 dark:text-white">Active Section Visibility</h4>
                                </div>
                                <div className="space-y-2">
                                    {['Top Selling Products', 'New Arrivals', 'Farmer Success Stories', 'Government Schemes Blog'].map(sec => (
                                        <div key={sec} className="flex items-center justify-between p-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded">
                                            <span className="text-sm text-slate-600 dark:text-slate-300">{sec}</span>
                                            <div className="w-10 h-5 bg-green-500 rounded-full cursor-pointer relative">
                                                <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'security':
                return (
                    <div className="space-y-6">
                        <SectionHeader title="Security & Compliance" description="Enforce system-level security policies and access controls." />
                        <div className="grid grid-cols-1 gap-4">
                            <Toggle label="Enforce 2FA for Staff" desc="Require Two-Factor Authentication for all Admin and Staff roles." checked={true} />
                            <Select label="Session Timeout" desc="Auto-logout inactive users after specified duration." options={['15 Minutes', '30 Minutes', '1 Hour', '4 Hours']} />
                            <Toggle label="Strict IP Restriction" desc="Block login attempts from non-whitelisted countries." checked={false} />
                            <Select label="Audit Log Retention" desc="Duration to keep security logs before archiving." options={['90 Days', '6 Months', '1 Year', 'Forever']} />
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                <h4 className="text-sm font-bold text-slate-800 dark:text-gray-100 mb-2">Password Policy Strength</h4>
                                <div className="space-y-2">
                                    {['Minimum 12 characters', 'Require special character', 'Require number', 'Prevent recycling last 3 passwords'].map(rule => (
                                        <label key={rule} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <input type="checkbox" defaultChecked className="rounded border-gray-300 text-primary focus:ring-primary" />
                                            {rule}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'notifications':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <SectionHeader title="Notifications & Alerts" description="Configure system-wide alert recipients, severity thresholds, and escalation rules." />

                        {/* 1. Critical Alert Routing */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">1. Critical Alert Routing</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="Critical System Alert Email" desc="Primary inbox for infra failures (Required)." placeholder="admin-alerts@kisanstore.com" />
                                <Input label="Backup Alert Email" desc="Secondary fallback if primary fails (Optional)." placeholder="backup-ops@kisanstore.com" />
                            </div>
                            <Toggle label="Send SMS Alerts" desc="Immediate alerts for downtime/security incidents." checked={true} />
                            <Input label="Primary Alert Phone Number" desc="Required only if SMS alerts = ON." placeholder="+91 98765 43210" />
                        </div>

                        {/* 2. Alert Severity Control */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">2. Alert Severity Control</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Select label="Alert Severity Threshold" desc="Minimum level to trigger an alert." options={['Critical only', 'Critical + High', 'All (Critical, High, Medium)']} />
                                <Select label="Repeat Alert Interval" desc="Time between repeated alerts for unacknowledged incidents." options={['Every 15 minutes', 'Every 30 minutes', 'Every 1 hour']} />
                            </div>
                        </div>

                        {/* 3. Incident Escalation */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">3. Incident Escalation</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Select label="Incident Escalation Time" desc="Time to wait before escalating if no response." options={['15 minutes', '30 minutes', '1 hour']} />
                                <Select label="Escalation Target" desc="Who receives the escalated alert." options={['Admin only', 'Super Admin', 'Admin + Super Admin', 'External escalation email']} />
                            </div>
                        </div>

                        {/* 4. Alert Category Toggles */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">4. Alert Category Toggles</h3>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 space-y-4">
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase">Infrastructure Alerts</h4>
                                    <Toggle label="Server Down / Database Failure" desc="Triggers when core infrastructure is unreachable." checked={true} />
                                    <Toggle label="Backup Failure" desc="Triggers when scheduled backups fail." checked={true} />
                                </div>
                                <div className="border-t border-slate-100 dark:border-slate-700"></div>
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase">Security Alerts</h4>
                                    <Toggle label="Suspicious Activity" desc="Multiple failed logins, permission changes, or unknown IPs." checked={true} />
                                </div>
                                <div className="border-t border-slate-100 dark:border-slate-700"></div>
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold text-slate-500 uppercase">Business-Critical Alerts</h4>
                                    <Toggle label="Payment Gateway Failure" desc="High priority alert for transaction failures." checked={true} />
                                </div>
                            </div>
                        </div>

                        {/* 5. Acknowledgement & Logging */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">5. Acknowledgement & Logging</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Toggle label="Alert Acknowledgement Required" desc="Alerts continue until manually acknowledged by an Admin." checked={true} />
                                <Select label="Alert Log Retention Period" desc="How long to keep detailed alert logs." options={['7 days', '30 days', '90 days']} />
                            </div>
                        </div>

                        {/* Last Updated Info */}
                        <div className="pt-4 text-right">
                            <p className="text-xs text-slate-400 italic">Last updated by Admin on {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                );
            case 'integrations':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <SectionHeader title="Integrations & Services" description="Manage external API connections, payment gateways, and third-party services." />

                        {/* Payment Gateways */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">Payment Gateways</h3>
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                                <div className="p-5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col justify-between">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">R</div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 dark:text-white">Razorpay</h4>
                                                <p className="text-xs text-slate-500">India Payment Processor</p>
                                            </div>
                                        </div>
                                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded">CONNECTED</span>
                                    </div>
                                    <div className="space-y-3 mb-4">
                                        <div>
                                            <label className="text-[10px] uppercase font-bold text-slate-400">Key ID</label>
                                            <input type="password" value="rzp_live_xxxxxxxxxxxx" className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded text-xs px-2 py-1 text-slate-600 truncate" disabled />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex-1 py-1.5 text-xs font-medium border border-slate-200 dark:border-slate-600 rounded hover:bg-slate-50 dark:hover:bg-slate-700 dark:text-slate-300">Configure</button>
                                        <button className="px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded">Disconnect</button>
                                    </div>
                                </div>

                                <div className="p-5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex flex-col justify-between opacity-75">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                                            <div>
                                                <h4 className="font-bold text-slate-800 dark:text-white">Stripe</h4>
                                                <p className="text-xs text-slate-500">Global Payments</p>
                                            </div>
                                        </div>
                                        <button className="px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded hover:shadow-lg transition-all">Connect</button>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-4">Accept payments from international customers. Setup requires Stripe Connect/Express account.</p>
                                </div>
                            </div>
                        </div>

                        {/* Communication Services */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-800 dark:text-gray-100 uppercase tracking-wide border-b border-slate-200 dark:border-slate-700 pb-2">Communication & Storage</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <h4 className="font-bold text-slate-800 dark:text-white mb-3 text-sm flex items-center gap-2">
                                        <Webhook size={16} className="text-primary" /> SMS Provider (Twilio/ MSG91)
                                    </h4>
                                    <Input label="API Key" desc="Provider authentication key." placeholder="Enter API Key" type="password" />
                                    <Input label="Sender ID" desc="6-character approved sender ID." placeholder="KISANS" />
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <h4 className="font-bold text-slate-800 dark:text-white mb-3 text-sm flex items-center gap-2">
                                        <Webhook size={16} className="text-orange-500" /> Cloud Storage (AWS S3)
                                    </h4>
                                    <Input label="Bucket Name" desc="S3 Bucket for product images." placeholder="kisan-assets-prod" />
                                    <Input label="Region" desc="AWS Region Code." placeholder="ap-south-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'localization':
                return (
                    <div className="space-y-8 animate-fade-in-up">
                        <SectionHeader title="Localization & Regional Settings" description="Configure language, currency, and regional formatting standards." />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <Select label="Default System Language" desc="Primary language for the platform interface." options={['English (United States)', 'Hindi (India)', 'Marathi', 'Telugu', 'Tamil']} />
                                <Select label="Default Currency" desc="Currency used for all pricing and transactions." options={['Indian Rupee (₹ INR)', 'US Dollar ($ USD)', 'Euro (€ EUR)']} />
                            </div>
                            <div className="space-y-4">
                                <Select label="Timezone" desc="Base timezone for server logs and operations." options={['(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi', '(GMT+00:00) UTC']} />
                                <Select label="Date Format" desc="Standard display format for dates." options={['DD/MM/YYYY (31/12/2024)', 'MM/DD/YYYY (12/31/2024)', 'YYYY-MM-DD (2024-12-31)']} />
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-dotted border-slate-300 dark:border-slate-700">
                            <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4">Preview Formatting</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                                    <p className="text-xs text-slate-500 mb-1">Currency</p>
                                    <p className="font-mono font-bold text-slate-800 dark:text-white">₹1,24,500.00</p>
                                </div>
                                <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                                    <p className="text-xs text-slate-500 mb-1">Date</p>
                                    <p className="font-mono font-bold text-slate-800 dark:text-white">05/01/2026</p>
                                </div>
                                <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                                    <p className="text-xs text-slate-500 mb-1">Time</p>
                                    <p className="font-mono font-bold text-slate-800 dark:text-white">08:45 PM</p>
                                </div>
                                <div className="p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                                    <p className="text-xs text-slate-500 mb-1">Number</p>
                                    <p className="font-mono font-bold text-slate-800 dark:text-white">1,234.56</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'maintenance':
                return (
                    <div className="space-y-6">
                        <SectionHeader title="Maintenance & Backup" description="Manage database backups and system updates." />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <Database className="text-primary" size={24} />
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">Database Backup</h4>
                                        <p className="text-xs text-slate-500">Last backup: 2 hours ago</p>
                                    </div>
                                </div>
                                <button className="w-full py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-md text-sm font-medium transition-colors">
                                    Trigger Manual Backup
                                </button>
                            </div>
                            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <Server className="text-green-600" size={24} />
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-white">System Status</h4>
                                        <p className="text-xs text-green-600">All Systems Operational</p>
                                    </div>
                                </div>
                                <button className="w-full py-2 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400 rounded-md text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700">
                                    View Service Health
                                </button>
                            </div>
                        </div>

                        {/* DANGER ZONE */}
                        <div className="mt-8 pt-8 border-t border-red-200 dark:border-red-900/30">
                            <h3 className="text-red-600 font-bold text-lg mb-4 flex items-center gap-2">
                                <AlertOctagon size={20} /> Danger Zone
                            </h3>
                            <div className="border border-red-200 dark:border-red-900/50 rounded-lg divide-y divide-red-100 dark:divide-red-900/30">
                                <div className="p-4 flex items-center justify-between bg-red-50 dark:bg-red-900/10">
                                    <div>
                                        <h4 className="font-bold text-red-900 dark:text-red-400 text-sm">Emergency Lockdown</h4>
                                        <p className="text-xs text-red-700 dark:text-red-500/70">Force logs out all users and prevents login.</p>
                                    </div>
                                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-md shadow-sm">
                                        Initiate Lockdown
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                        <Settings size={48} className="mb-4 opacity-50" />
                        <p>Select a category to configure settings.</p>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 animate-fade-in-up">

            {/* Left Sidebar Navigation */}
            <aside className="w-full lg:w-64 shrink-0 space-y-1">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-200 border border-transparent 
                        ${activeTab === cat.id
                                ? 'bg-white dark:bg-slate-800 shadow-sm border-slate-200 dark:border-slate-700 text-primary'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                            }`}
                    >
                        <cat.icon size={18} className={activeTab === cat.id ? 'text-primary' : 'text-slate-400'} />
                        <div>
                            <p className={`text-sm font-medium ${activeTab === cat.id ? 'font-bold' : ''}`}>{cat.label}</p>
                        </div>
                        {activeTab === cat.id && <ChevronRight size={16} className="ml-auto opacity-50" />}
                    </button>
                ))}
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
                {renderContent()}

                {/* Save Changes FLoating Action */}
                {hasUnsavedChanges && (
                    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
                        <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-6">
                            <div>
                                <p className="font-bold text-sm">Unsaved Changes</p>
                                <p className="text-xs opacity-80">You have modified global settings.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setHasUnsavedChanges(false)}
                                    className="px-4 py-2 hover:bg-white/10 dark:hover:bg-slate-200/50 rounded-lg text-sm font-medium transition-colors"
                                >
                                    Reset
                                </button>
                                <button className="px-5 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/30 flex items-center gap-2">
                                    <Save size={16} /> Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GlobalSettings;
