import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>

            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+91 1800 123 456</small>
                            <small className="text-light"><i className="fa fa-envelope-open me-2" />pozy@gmail.com</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/"><i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href className="navbar-brand p-0">
                        <h1 className="m-0 pozy"><i className="fa fa-map-marker-alt me-3 pozy" />POZY Trains</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link default">Home</NavLink>
                            <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                            <NavLink to="/Service" className="nav-item nav-link">Services</NavLink>
                            <NavLink to="/Package" className="nav-item nav-link">Packages</NavLink>
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                                <div className="dropdown-menu bg-info m-0">
                                    <a href="destination.html" className="dropdown-item">Destination</a>
                                    <a href="booking.html" className="dropdown-item">E-Booking</a>
                                    <a href="team.html" className="dropdown-item">Travel Guides</a>
                                    <a href="testimonial.html" className="dropdown-item">Reviews</a>
                                    <a href="404.html" className="dropdown-item">Train Timings</a>
                                </div>
                            </div> */}
                        </div>
                        <NavLink to="/Login" className="btn btn-info text-white rounded-pill py-2 px-4">Register</NavLink>
                    </div>
                </nav>
                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                                <p className="fs-4 text-white mb-4 animated slideInDown" />
                                <div className="position-relative w-75 mx-auto animated slideInDown">
                                    <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: New Delhi" />
                                    <button type="button" className="btn btn-info text-white rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: 7 }}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header