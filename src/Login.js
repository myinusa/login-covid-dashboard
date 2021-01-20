import React from 'react';
// import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/auth/LoginButton';
import App from './App';

function Login() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <LoginButton />
      <App />
    </>
  );
}

export default Login;
