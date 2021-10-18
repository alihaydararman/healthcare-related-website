import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            <button onClick={signInUsingGithub} className="btn btn-warning mx-4">GitHub Sign In</button><br /><br />
            <p>Are you New User? Please <Link to='/resgister' >Register</Link></p>
        </div>
    );
};

export default Login;