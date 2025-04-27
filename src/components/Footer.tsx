import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="nav-logo">
          <div className="logo-placeholder">MG</div>
          <span className="logo">Margaret Gathoni</span>
          <p>© {new Date().getFullYear()} My Tech Journey Through Code 🎶</p>
      </div>
      
    </footer>
  );
};

export default Footer;
