import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'navy', color:'white', padding: '20px', marginTop:"3vw", textAlign: 'center' }}>
      <p style={{ margin: '0' }}>© {currentYear} Your Bookstore. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
