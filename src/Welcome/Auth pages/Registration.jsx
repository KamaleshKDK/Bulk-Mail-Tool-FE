import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Registration() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""

    })
    const [error, setError] = useState("")

   
    const navigate = useNavigate()

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://bulk-mail-tool.herokuapp.com/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/")
            console.log(res.message)
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-5 form-section">
                        <div class="login-wrapper">
                            <h2 class="login-title">Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                                <div class="form-group"> <label for="name" class="sr-only">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        value={data.firstName}
                                        id="name"
                                        class="form-control"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div class="form-group"> <label for="name" class="sr-only">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        onChange={handleChange}
                                        value={data.lastName}
                                        id="name"
                                        class="form-control"
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                                <div class="form-group"> <label for="email" class="sr-only">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="form-control"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        value={data.email}
                                        required
                                    />
                                </div>
                                <div class="form-group mb-3"> <label for="password" class="sr-only">Password</label>
                                    <input
                                      type="password"                   
                                        name="password"
                                        id="password"
                                        class="form-control"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        value={data.password}
                                        required
                                    />
                                </div>
                                <div class="invalid-feedback">
                                                Email is invalid
                                            </div>
                                            {
                                            error && <div className="error_msg">{error}</div>
                                        }
                                <div class="d-flex justify-content-between align-items-center mb-5">
                                <button Link to={"/"} type="submit"class="btn login-btn">
                                                Register
                                            </button>
                                 {/* <Link to="/"> <button name="login"  id="login" class="btn login-btn" type="submit">Log In</button></Link> */}
                                    {/* <input name="login" id="login" class="btn login-btn" type="button" value="Sign In" /> */}
                                </div>
                            </form>
                            <p class="login-wrapper-footer-text">Already Have an Account ?  <Link to='/' class="text-reset">Sign In </Link></p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-7 intro-section">
                        <div class="brand-wrapper">

                        </div>
                        <div class="intro-content-wrapper">
                            <h1 class="intro-title ">Grow your Business with Bulk Email</h1>
                            <p class="intro-text animate-charcter-home">to create Eye-Catching Visual Effect Machine</p> 
                            <a href="https://nodemailer.com/usage/bulk-mail/" class="btn btn-read-more">Read more</a>
                        </div>
                        <div class="intro-section-footer">
                            <na class="footer-nav">
                                 {/* <a href="#!">Facebook</a> <a href="#!">Twitter</a> <a href="#!">Gmail</a>  */}
                                 </na>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Registration