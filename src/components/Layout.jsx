import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Adjust the path if necessary
import Footer from './Footer'; // Adjust the path if necessary

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
