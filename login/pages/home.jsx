import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://login-mern-api-lake.vercel.app/submit', { email, password })
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }

    return (
        <div className='formUI'>
            <div className="page">
                <form action="" className='Form' onSubmit={handleSubmit}>
                    <h1 style={{ fontFamily: 'sans-serif' }}>Already a user ?</h1>
                    <div className="inputWrapper">
                        <div className="label">
                            <label htmlFor="email"><strong className="labelText">Email</strong></label>
                            <input type="email" name="email" id="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="inputFields">
                            <label htmlFor="password"><strong className="labelText">Password</strong></label>
                            <input type="password" name="password" id="password" placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <a href="#" className='forget'>Forget Password?</a>
                    <button type='submit' className="btn">Log in</button>
                    <Link to="/register" className="btn">Create an account</Link>
                </form>
            </div>
        </div>
    );
}

export default Home;
  