import React from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <div className="landing-container">
      <h1>Welcome to the Blog Platform</h1>
      <div className="auth-buttons">
        <button onClick={handleLogin} className="btn btn-login">Login</button>
        <button onClick={handleSignup} className="btn btn-signup">Signup</button>
      </div>
    </div>
  );
};

export default IndexPage;
