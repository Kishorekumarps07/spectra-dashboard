import React from 'react';
import { ChevronDown, Search, Bell, MoreVertical, Sliders, TrendingUp, TrendingDown, Cpu, Zap } from 'lucide-react';

const Dashboard = () => {

  //  SALES DATA

  const salesData = [
    { day: "Sun", value: 40 },
    { day: "Mon", value: 70 },
    { day: "Tue", value: 50 },
    { day: "Wed", value: 100 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 80 },
    { day: "Sat", value: 45 }
  ];


  //  PROFIT DATA
  
  const profitData = [
    { source: "Online Store", amount: "+$8,240", change: "+12%", trend: "up" },
    { source: "Freelance Clients", amount: "+$2,100", change: "+5%", trend: "up" },
    { source: "Affiliate Ads", amount: "+$1,250", change: "-2%", trend: "down" },
    { source: "Crypto Assets", amount: "+$850", change: "+18%", trend: "up" },
    { source: "Stock Dividends", amount: "+$320", change: "+1%", trend: "up" },
    { source: "Digital Products", amount: "+$135", change: "-5%", trend: "down" },
    { source: "YouTube Revenue", amount: "+$950", change: "+8%", trend: "up" }
  ];

  
  //  INVOICE DATA
  
  const invoiceData = [
    { name: "Apple Store", date: "15 Nov", amount: "$12,450", status: "Paid", initial: "A" },
    { name: "Michael Jordan", date: "14 Nov", amount: "$8,320", status: "Unpaid", initial: "M" },
    { name: "Spotify Subs", date: "12 Nov", amount: "$5,100", status: "Paid", initial: "S" },
    { name: "Amazon AWS", date: "10 Nov", amount: "$2,300", status: "Paid", initial: "A" },
    { name: "Nike Official", date: "09 Nov", amount: "$4,500", status: "Paid", initial: "N" },
    { name: "Samsung Electronics", date: "08 Nov", amount: "$7,200", status: "Unpaid", initial: "S" },
    { name: "Tesla Motors", date: "07 Nov", amount: "$45,000", status: "Paid", initial: "T" },
    { name: "Adobe Creative", date: "06 Nov", amount: "$650", status: "Paid", initial: "A" }
  ];

  return (
    <main className="dashboard-content">
      {/* Header */}
      <header className="dashboard-header">
        <h1 className="header-title">Overview</h1>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search here..." />
          </div>
          <Bell size={20} className="icon-btn" />
          <div className="user-profile">
            {/* user picture     */}
            <img src="https://i.pinimg.com/474x/d9/17/8e/d9178ebd377cf2dd2ee5e3b5232dec67.jpg" alt="User" className="user-image" />
            <ChevronDown size={16} className="icon-btn" />
          </div>
        </div>
      </header>

      <div className="dashboard-grid">
        
        {/* Profit Card */}
        <div className="card profit-card">
          <div className="card-header">
            <h3 className="card-title">Profit</h3>
            <MoreVertical size={16} className="icon-btn" />
          </div>
          <div className="profit-summary">
            <div>
               <p className="profit-change">+14% Since last week</p>
               <h2 className="profit-value">$12 895.5</h2>
            </div>
            <div className="mini-chart">
               <svg viewBox="0 0 100 50" className="wave-chart-mini">
                 <path d="M0,40 C20,40 20,10 50,25 C80,40 80,10 100,20" fill="none" stroke="#6c63ff" strokeWidth="3"/>
               </svg>
            </div>
          </div>
          <div className="profit-list-wrapper">
             <h4 className="section-subtitle">Revenue Sources</h4>
             <div className="profit-list">
                {profitData.map((item, index) => (
                  <div key={index} className="profit-item">
                     <div className="profit-info">
                       <span className="source-name">{item.source}</span>
                       <span className={`trend-icon ${item.trend}`}>
                         {item.trend === 'up' ? <TrendingUp size={12}/> : <TrendingDown size={12}/>}
                         {item.change}
                       </span>
                     </div>
                     <span className="source-amount">{item.amount}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Sales Card */}
        <div className="card sales-report-card">
          <div className="card-header">
            <h3 className="card-title">Sales Report</h3>
            <span className="week-label">Week <ChevronDown size={14} /></span>
          </div>
          <div className="bar-chart-container">
            {salesData.map((item, index) => (
              <div key={index} className="bar-group">
                <div className="bar" style={{ height: `${item.value}%` }} title={`${item.value}% Sales`}></div>
                <span className="day-label">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* === UPDATED ANALYTICAL AI CARD === */}
        <div className="card analytical-ai-card">
          <div className="card-header">
            <h3 className="card-title">Analytical AI</h3>
            <MoreVertical size={16} className="icon-btn" />
          </div>
          
          {/* Main Chart Area */}
          <div className="ai-content">
            <div className="ai-chart-area">
               {/* Advanced Area Chart SVG */}
               <svg viewBox="0 0 200 80" className="ai-svg">
                  <defs>
                    <linearGradient id="aiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00d2d3" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#00d2d3" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {/* Fill Path */}
                  <path d="M0,50 C40,50 50,20 90,35 S150,60 200,20 L200,80 L0,80 Z" fill="url(#aiGradient)" />
                  {/* Stroke Path */}
                  <path d="M0,50 C40,50 50,20 90,35 S150,60 200,20" fill="none" stroke="#00d2d3" strokeWidth="3" strokeLinecap="round"/>
                  {/* Pulsing Dot */}
                  <circle cx="200" cy="20" r="4" fill="#00d2d3" className="pulsing-dot" />
               </svg>
            </div>

            {/* AI Stats Metrics */}
            <div className="ai-stats">
              <div className="ai-stat-item">
                <Cpu size={18} className="ai-icon" />
                <div>
                  <span className="ai-val">98.5%</span>
                  <span className="ai-label">Accuracy</span>
                </div>
              </div>
              <div className="ai-stat-item">
                <Zap size={18} className="ai-icon" />
                <div>
                  <span className="ai-val">1.2s</span>
                  <span className="ai-label">Speed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="card invoices-card">
          <div className="card-header invoices-header">
            <h3 className="card-title">Invoices</h3>
            <div className="report-action"><Sliders size={16} /> Report</div>
          </div>
          <div className="table-wrapper">
            <table className="invoices-table">
              <thead>
                <tr><th>Customer</th><th>Date</th><th>Amount</th><th>Status</th></tr>
              </thead>
              <tbody>
                {invoiceData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="user-row">
                        <div className="user-avatar">{item.initial}</div>
                        {item.name}
                      </div>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>
                      <span className={`status-tag ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Card */}
        <div className="card activity-card">
          <div className="card-header">
            <h3 className="card-title">Activity</h3>
            <MoreVertical size={16} className="icon-btn" />
          </div>
          <div className="activity-content">
            <div className="percentage-circle">
              <div className="circle-inner">
                 <h2 className="activity-percent">+27%</h2>
                 <span className="activity-label">Growth</span>
              </div>
            </div>
            <div className="activity-list">
               <div className="activity-item">
                 <div className="dot-wrapper"><span className="dot blue"></span></div>
                 <div className="meta"><span className="meta-title">Transactions</span><span className="meta-val">452</span></div>
               </div>
               <div className="activity-item">
                 <div className="dot-wrapper"><span className="dot orange"></span></div>
                 <div className="meta"><span className="meta-title">Payouts</span><span className="meta-val">412</span></div>
               </div>
               <div className="activity-item">
                 <div className="dot-wrapper"><span className="dot green"></span></div>
                 <div className="meta"><span className="meta-title">Sales</span><span className="meta-val">800</span></div>
               </div>
               <div className="activity-item">
                 <div className="dot-wrapper"><span className="dot red"></span></div>
                 <div className="meta"><span className="meta-title">Reports</span><span className="meta-val">128</span></div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Dashboard;