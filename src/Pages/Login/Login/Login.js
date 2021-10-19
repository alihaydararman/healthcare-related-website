import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    const location = useLocation();
    const histry = useHistory()
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                histry.push(redirect_uri)
            })

    }
    const handleGitHubLogin = () => {
        signInUsingGithub()
            .then(result => {
                histry.push(redirect_uri)
            })

    }
    return (
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign In</button>
            <button onClick={handleGitHubLogin} className="btn btn-warning mx-4">GitHub Sign In</button><br /><br />
            <p>Are you New User? Please <Link to='/resgister' >Register</Link></p>
        </div>
    );
};

export default Login;