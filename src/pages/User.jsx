import React, { useState } from 'react'
import { useTheme } from '../App'
import { useNavigate } from 'react-router';

const User = () => {
    const [content, setContent] = useState("login");
    const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useTheme();
    const handleContentDisplay = () => {
        setContent((content) => (content === "login" ? "register" : "login"));
    }
    if (isLoggedIn !== null) {
        return null;
    }
    return (
        <>
            <div className='user-page-container'>
                <div className='user-page-control-button-group'>
                    <button onClick={handleContentDisplay}>Login</button>
                    <button onClick={handleContentDisplay}>Register</button>
                </div>
                <div className='user-page-content'>
                    {
                        content === "login" ? <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userData={userData} setUserData={setUserData} /> : <RegisterForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userData={userData} setUserData={setUserData} />
                    }
                </div>
            </div>
        </>
    )
}

const LoginForm = (props) => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const navigate = useNavigate()
    const handleLogin = () => {
        const previous_data = props.userData || [];

        // Check if user already exists
        const isUserExist = previous_data.findIndex(user => user.email === inputEmail && user.password === inputPassword) !== -1;

        if (isUserExist) {
            console.log("User Logged In!")
            props.setIsLoggedIn(true)
            navigate("/")
        } else {
            alert("User is not registered!");
        }
    };

    return (
        <>
            <div className='form-container'>
                <div className='row'>
                    <div className='heading'>
                        <h2>Customer Login</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-label'>
                        <label>Email address*</label>
                    </div>
                    <div className='form-input'>
                        <input type="text" placeholder='Email' onKeyUp={(e) => setInputEmail(e.target.value)} />
                    </div>
                </div>
                <div className='row'>
                    <div className='form-label'>
                        <label>Password*</label>
                    </div>
                    <div className='form-input'>
                        <input type="text" placeholder='Password' onKeyUp={(e) => setInputPassword(e.target.value)} />
                    </div>
                </div>
                <div className='row flex-row'>
                    <div className='form-button'>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    <div className='form-link'>
                        <p>Forgot Your Password?</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-link'>
                        <p>New Customer?Sign Up</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const RegisterForm = (props) => {
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const navigate = useNavigate()
    const handleSignUp = () => {
        const previous_data = props.userData || [];

        // Check if user already exists
        const isUserExist = previous_data.findIndex(user => user.email === inputEmail) !== -1;

        if (isUserExist) {
            alert("User is already registered!");
        } else {
            const newUserData = {
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail,
                password: inputPassword,
                cart: []
            };

            // Create a new array and update the state
            const updatedUserData = [...previous_data, newUserData];
            props.setUserData(updatedUserData);

            // Store updated data in localStorage
            localStorage.setItem("Users", JSON.stringify(updatedUserData));

            console.log(localStorage.getItem("Users"))
            console.log("User Logged In!")
            props.setIsLoggedIn(true)
            alert("Registration successful!");
            navigate("/");
        }
    };

    return (
        <>
            <div className="form-container">
                <div className="row">
                    <div className="heading">
                        <h2>Create Account</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="form-label">
                        <label>First name*</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="First name" onKeyUp={(e) => setInputFirstName(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-label">
                        <label>Last name*</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Last name" onKeyUp={(e) => setInputLastName(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-label">
                        <label>Email address*</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Email" onKeyUp={(e) => setInputEmail(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-label">
                        <label>Password*</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Password" onKeyUp={(e) => setInputPassword(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-button">
                        <button onClick={handleSignUp}>Sign Up</button>
                    </div>
                </div>
                <div className="row">
                    <div className="form-link">
                        <p>Returning Customer? Login</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User
