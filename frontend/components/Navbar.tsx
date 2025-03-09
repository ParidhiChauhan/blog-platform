import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </nav>
  );
};

export default Navbar;
