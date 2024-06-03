import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function Form() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand" href="#">Hobbycue</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hobbies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="header container text-center py-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Explore your <span style={{ color: '#007bff' }}>hobby</span> or <span style={{ color: '#ff5722' }}>passion</span></h1>
                        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers,
                            suppliers, classes, workshops, and places to practice, participate or perform.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="signin-form">
                            <h3>Sign In</h3>
                            <form>
                                <div className="form-group">
                                    <button className="btn btn-outline-primary btn-block">Continue with Google</button>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-outline-primary btn-block">Continue with Facebook</button>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Continue</button>
                                <a href="#" className="btn btn-link">Forgot password?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content container py-5">
                <div className="row text-center">
                    <div className="col-md-3">
                        <h3>People</h3>
                        <p>Find a teacher, coach, or expert for your hobby interest in your locality.</p>
                        <button className="btn btn-outline-primary">Connect</button>
                    </div>
                    <div className="col-md-3">
                        <h3>Place</h3>
                        <p>Find a class, school, playground, auditorium, studio, shop, or an event venue.</p>
                        <button className="btn btn-outline-primary">Meet up</button>
                    </div>
                    <div className="col-md-3">
                        <h3>Product</h3>
                        <p>Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or
                            from community members.</p>
                        <button className="btn btn-outline-primary">Get it</button>
                    </div>
                    <div className="col-md-3">
                        <h3>Program</h3>
                        <p>Find events, meetups and workshops related to your hobby. Register or buy tickets online.</p>
                        <button className="btn btn-outline-primary">Attend</button>
                    </div>
                </div>
            </div>

            <div className="add-own text-center py-5">
                <h3>Add your own</h3>
                <p>Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Go ahead and Add your
                    Own page.</p>
                <button className="btn btn-outline-primary">Add new</button>
            </div>

            <div className="testimonial text-center py-5">
                <div className="container">
                    <h3>Testimonials</h3>
                    <p>In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or
                        connect with like-minded people.</p>
                    <audio controls>
                        <source src="audio/testimonial.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <p><strong>Shubha Nagarajan</strong> - Classical Dancer</p>
                </div>
            </div>

            <div className="footer text-center py-3">
                <p>Your <strong>Hobby</strong>, Your <strong>Community</strong>...</p>
                <button className="btn btn-primary">Get started</button>
                <p>© Purple Cue Private Limited</p>
            </div>
        </>
    );
}

export default Form;
