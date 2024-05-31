import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Header/>
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="https://media.npr.org/assets/img/2016/09/16/indianrailway1_custom-f0cebada13c58db3cf828b05440ab8233b09a761.jpg" alt style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start pozy pe-3">About Us</h6>
                            <h1 className="mb-4">Welcome to <span className>POZY</span></h1>
                            <p className="mb-4">POZY Trains is a “Mini Ratna (Category-I)” Central Public Sector Enterprise under Ministry of Railways, Government of India. POZY Trains was incorporated on 27th September, 1999 as an extended arm of the Indian Railways to upgrade, professionalize and manage the catering and hospitality services at stations, on trains and other locations and to promote domestic and international tourism through development of special tour packages, information &amp; commercial publicity and global reservation systems.</p>
                            <p className="mb-4"> The authorized capital of the company is 10 crores and paid up capital is 3 crores. It’s registered and Corporate Office is situated at Ahmedabad.</p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />First Class Flights</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />Handpicked Hotels</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />5 Star Accommodations</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />Latest Model Vehicles</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />150 Premium City Tours</p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />24/7 Service</p>
                                </div>
                            </div>
                            <a className="btn btn-info py-3 text-white rounded-pill px-5 mt-2" href>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Booking Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                                <h6 className="text-white text-uppercase">Booking</h6>
                                <h1 className="text-white mb-4">Online Booking</h1>
                                <p className="mb-4">Our company's online train booking system is a seamless and efficient platform designed to cater to the diverse travel needs of our customers.</p>
                                <p className="mb-4">With user-friendly interfaces and a robust backend, we offer a hassle-free experience from start to finish. Our intuitive website or app allows users to effortlessly search for train schedules, select preferred routes, and choose from various classes and seat options. The streamlined booking process ensures quick confirmations and secure transactions, providing peace of mind to travelers...</p>
                                <a className="btn btn-outline-light py-3 px-5 mt-2" href>Read More</a>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4">Book A Tour</h1>
                                <form>
                                    <div className="row g-3 text-white">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="phone" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Mobile No.</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime">Date &amp; Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select text-white bg-transparent" id="select1">
                                                    <option className="bg-info" value={0} />
                                                    <option className="bg-info" value={1}>Mumbai</option>
                                                    <option className="bg-info" value={2}>Delhi</option>
                                                    <option className="bg-info" value={3}>Ahmedabad</option>
                                                </select>
                                                <label htmlFor="select1" className="text-white">From: </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select text-white bg-transparent" id="select2">
                                                    <option className="bg-info" value={0} />
                                                    <option className="bg-info" value={1}>Mumbai</option>
                                                    <option className="bg-info" value={2}>Delhi</option>
                                                    <option className="bg-info" value={3}>Ahmedabad</option>
                                                </select>
                                                <label htmlFor="select2" className="text-white">To: </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: 100 }} defaultValue={""} />
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Booking Start */}
            {/* Destination Start */}
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center pozy px-3">TRAINS</h6>
                        <h1 className="mb-5">Most Preffered Trains</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-6 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/2022_9img30_sep_2022_pti09_30_2022_000068b_0-sixteen_nine.jpg?size=948:533" alt />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">97% Ratings</div>
                                        <div className="bg-white text-danger fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Vande Bharat</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src="https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2023/9/1/rajadhani.JPG.transform/schema-4x3/image.jpg" alt />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">85% Ratings</div>
                                        <div className="bg-white text-danger fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Rajdhani Express</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src="https://images.news18.com/ibnlive/uploads/2022/12/maharajas-express1-1024x681-16722290274x3.jpg" alt />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">89% Ratings</div>
                                        <div className="bg-white text-danger fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Maharajas' Express</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                            <a className="position-relative d-block h-100 overflow-hidden" href>
                                <img className="img-fluid position-absolute w-100 h-100" src="https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/12/golden-chariot-train-2-1024x682.jpg" alt style={{ objectFit: 'cover' }} />
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">81% Ratings</div>
                                <div className="bg-white text-danger fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">The Golden Chariot</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Destination Start */}
            {/* Process Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center pozy px-3">Process</h6>
                        <h1 className="mb-5">3 Easy Steps</h1>
                    </div>
                    <div className="row gy-5 gx-4 justify-content-center">
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                                    <i className="fa fa-globe fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Choose Your Location</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                                    <i className="fa fa-rupee-sign fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Pay With UPI</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                                    <i className="fa fa-subway fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Start Travelling</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Process Start */}
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center pozy px-3">Services</h6>
                        <h1 className="mb-5">Our Services</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe pozy mb-4" />
                                    <h5>Domestics Tours</h5>
                                    <p>Enjoy your tour with family <br /><br /><br /></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-hotel pozy mb-4" />
                                    <h5>Advanced Booking</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user pozy mb-4" />
                                    <h5>Travel Guides</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog pozy mb-4" />
                                    <h5>Event Management</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            {/* Package Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center pozy px-3">Offers</h6>
                        <h1 className="mb-5">Special Offers</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/package-1.jpg" alt />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt pozy me-2" />Thailand</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt pozy me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user pozy me-2" />2 Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$149.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                    </div>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/package-2.jpg" alt />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt pozy me-2" />Indonesia</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt pozy me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user pozy me-2" />2 Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$139.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                    </div>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/package-3.jpg" alt />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt pozy me-2" />Malaysia</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt pozy me-2" />3 days</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-user pozy me-2" />2 Person</small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">$189.00</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                        <small className="fa fa-star pozy" />
                                    </div>
                                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                        <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }}>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Package End */}
            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center pozy px-3">Travel Guide</h6>
                        <h1 className="mb-5">Meet Our Guide</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-1.jpg" alt />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-2.jpg" alt />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-3.jpg" alt />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-4.jpg" alt />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="img/team-4.jpg" alt />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}

            <Footer/>
            
        </div>

    )
}

export default Home