import React from 'react'
import { Link } from 'react-router-dom';
import '../Welcome/navbar.css'

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "blue" }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-sliders-h tg"></i></span>
                </button>


                <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-email-notifications-justicon-flat-justicon.png" style={{ width: "40px", height: "40px", marginBottom: "4px", marginLeft: "13px", marginRight: "9px" }} />

                <a className="navbar-brand navitem appName animate-charcter-home" href="/">BULK <span className="sName">MAIL</span></a>

                <div className="collapse navbar-collapse end" id="navbarTogglerDemo03">
                    <ul className="navbar-nav">
                        <li><Link className="navLink" to="/">Home</Link></li>
                        <li><Link className="navLink" to="/">About us</Link></li>
                        <li><Link className="navLink" to="/book">Book-now</Link></li>
                    </ul>

                    <Link to="/bulk-mailer" className='login-btn btn  ms-auto px-3'>
                        <i className='fa fa-sign-in me-2'></i>Login</Link>
                    <Link to="/register" className='register-btn btn  ms-5 px-3 me-5'>
                        <i className='fa fa-user-plus me-2'></i>Register</Link>

                </div>
            </nav>

        </>
    )
}

export default NavBar