import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import axios from 'axios';

const Signin = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                'https://myproject-e86ed-default-rtdb.firebaseio.com/signupdata.json'
            );
            const signupData = Object.values(response.data);
            const user = signupData.find(
                (user) => user.email === email && user.password === password
            );
            if (user) {
                navigate('/');
            } else {
                alert('Invalid Credentials');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <Navbar />
            <div className='signin-form'>
                <center>
                    <h1>Sign In</h1>
                    <form onSubmit={submitHandler}>
                        <input
                            type='email'
                            name='email'
                            placeholder='email'
                            value={email}
                            onChange={changeHandler}
                        />
                        <br />
                        <input
                            type='password'
                            name='password'
                            placeholder='password'
                            value={password}
                            onChange={changeHandler}
                        />
                        <br />
                        <button type='submit'>Sign In</button>
                    </form>
                </center>
            </div>
        </>
    );
};

export default Signin;