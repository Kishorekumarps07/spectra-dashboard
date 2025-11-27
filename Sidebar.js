import React from 'react';
import { Briefcase, BarChart2, Users, Mail, Calendar, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: Briefcase, active: true },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Contacts', icon: Users },
    { name: 'Mail', icon: Mail },
    { name: 'Calendar', icon: Calendar },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <Briefcase size={24} color="#6C63FF" />
        <span className="logo-text">SPECTRA</span>
      </div>
      <div className="sidebar-nav">
        {menuItems.map((item) => (
          <div key={item.name} className={`nav-item ${item.active ? 'active' : ''}`}>
            <item.icon size={20} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-footer">
        <div className="nav-item logout">
          <LogOut size={20} />
          <span>Log Out</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;