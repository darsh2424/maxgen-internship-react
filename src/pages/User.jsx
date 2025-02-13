import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser, registerUser } from "../redux/authSlice";

const User = () => {
    const [content, setContent] = useState("login");
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleContentDisplay = () => {
        setContent((prevContent) => (prevContent === "login" ? "register" : "login"));
    };

    const handleLogOutClick = () => {
        sessionStorage.setItem("login", "false");
        sessionStorage.setItem("login_user", null);

        dispatch(logoutUser());
        navigate("/user");
    };

    return (
        <div className="user-page-container">
            {isLoggedIn ? (
                <div className="user-page-control-button-group logout-group">
                    <button className="logout-center-button" onClick={handleLogOutClick}>
                        LOGOUT
                    </button>
                </div>
            ) : (
                <>
                    <div className='user-page-container'>
                        <div className='user-page-control-button-group'>
                            <button onClick={handleContentDisplay}>Login</button>
                            <button onClick={handleContentDisplay}>Register</button>
                        </div>
                        <div className='user-page-content'>
                            {content === "login" ? <LoginForm /> : <RegisterForm />}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const LoginForm = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        const existingUser = userData.find(
            (user) => user.email === inputEmail && user.password === inputPassword
        );

        if (existingUser) {
            sessionStorage.setItem("login", "true");
            sessionStorage.setItem("login_user", inputEmail);

            dispatch(loginUser(inputEmail));
            navigate("/");
        } else {
            alert("User not registered!");
        }
    };

    return (
        <div className='form-container'>
            <div className='row'>
                <div className='heading'><h2>Customer Login</h2></div>
            </div>
            <div className='row'>
                <div className='form-label'><label>Email address*</label></div>
                <div className='form-input'>
                    <input type="text" placeholder='Email' onChange={(e) => setInputEmail(e.target.value)} />
                </div>
            </div>
            <div className='row'>
                <div className='form-label'><label>Password*</label></div>
                <div className='form-input'>
                    <input type="password" placeholder='Password' onChange={(e) => setInputPassword(e.target.value)} />
                </div>
            </div>
            <div className='row flex-row'>
                <div className='form-button'>
                    <button onClick={handleLogin}>Login</button>
                </div>
                <div className='form-link'><p>Forgot Your Password?</p></div>
            </div>
            <div className='row'><div className='form-link'><p>New Customer? Sign Up</p></div></div>
        </div>
    );
};

const RegisterForm = () => {
    const [inputFirstName, setInputFirstName] = useState("");
    const [inputLastName, setInputLastName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const userData = useSelector((state) => state.auth.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignUp = () => {
        const isUserExist = userData.some((user) => user.email === inputEmail);

        if (isUserExist) {
            alert("User already registered!");
        } else {
            const newUser = { firstName: inputFirstName, lastName: inputLastName, email: inputEmail, password: inputPassword, cart:[] };

            dispatch(registerUser(newUser));
            localStorage.setItem("Users", JSON.stringify([...userData, newUser]));
            sessionStorage.setItem("login", "true");
            sessionStorage.setItem("login_user", inputEmail);

            alert("Registration successful!");
            navigate("/");
        }
    };

    return (
        <div className="form-container">
            <div className="row"><div className="heading"><h2>Create Account</h2></div></div>
            <div className="row">
                <div className="form-label"><label>First name*</label></div>
                <div className="form-input"><input type="text" placeholder="First name" onChange={(e) => setInputFirstName(e.target.value)} /></div>
            </div>
            <div className="row">
                <div className="form-label"><label>Last name*</label></div>
                <div className="form-input"><input type="text" placeholder="Last name" onChange={(e) => setInputLastName(e.target.value)} /></div>
            </div>
            <div className="row">
                <div className="form-label"><label>Email address*</label></div>
                <div className="form-input"><input type="text" placeholder="Email" onChange={(e) => setInputEmail(e.target.value)} /></div>
            </div>
            <div className="row">
                <div className="form-label"><label>Password*</label></div>
                <div className="form-input"><input type="password" placeholder="Password" onChange={(e) => setInputPassword(e.target.value)} /></div>
            </div>
            <div className="row"><div className="form-button"><button onClick={handleSignUp}>Sign Up</button></div></div>
            <div className="row"><div className="form-link"><p>Returning Customer? Login</p></div></div>
        </div>
    );
};

export default User;
