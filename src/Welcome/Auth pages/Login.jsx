import '../Auth pages/login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'

function Login() {
    const [data, setData] = useState({ email: "", password: "" })
    const [error, setError] = useState("");
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

 const validationSchema = Yup.object({
        email : Yup.string().email('Enter valid email').required('Email is required'),
        password : Yup.string().required('Please Enter your password')
    }) 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://bulk-mail-tool.herokuapp.com/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            toast.success('Login Successfully');
            window.location = "/bulk-mailer";
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500)
                toast.error("Email or Password is Invalid");
                {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6 col-md-7 intro-section">
                        <div class="brand-wrapper">

                        </div>
                        <div class="intro-content-wrapper">
                            <h1 class="intro-title animate-charcter-home">Welcome to Bulk Mail Tool !</h1>
                            <p class="intro-text">You Can Send Mails to Multiple Recipients Easily in this Website</p>
                            <a href="https://nodemailer.com/usage/bulk-mail/" class="btn btn-read-more">Read more</a>
                        </div>
                        <div class="intro-section-footer">
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5 form-section">
                        <div class="login-wrapper">
                            <h2 class="login-title">Sign In</h2>
                            <form  validationSchema = {validationSchema}  onSubmit={handleSubmit}>
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

                                    <div class="invalid-feedback">
                                        Email is invalid
                                    </div>
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
                                    <div class="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>
                                {
                                    error && <div className="error_msg">{error}</div>
                                }

                                <div class="d-flex justify-content-between align-items-center mb-5">
                                    <button type="submit" class="btn login-btn" >
                                        Login
                                    </button>
                                </div>
                               
                            </form>
                            <p class="login-wrapper-footer-text">New User ?  <Link to='/register' class="text-reset">Signup here</Link></p>
                            <div>Email : guest@gmail.com</div>
                            <div>Password : Guest@123</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login