
import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Your Notes, Secured on the Cloud</h1>
                    <p className="lead mt-4">
                        iNotebook is a digital platform designed to help you organize your thoughts, 
                        tasks, and ideas. Access your notes from anywhere in the world, at any time. 
                        Your privacy is our priority.
                    </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Link className="btn btn-outline-primary btn-lg px-4 me-md-2 fw-bold" to="/login" role="button">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    {/* Aap yahan koi achi image daal sakte hain */}
                    <img className="rounded-lg-3" src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=500" alt="Notebook" width="720" />
                </div>
            </div>

            <div className="row mt-5 g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <h3 className="fs-2 text-body-emphasis">Free to Use</h3>
                    <p>Unlimited notes storage without paying a single penny. It's built for students and professionals.</p>
                </div>
                <div className="feature col">
                    <h3 className="fs-2 text-body-emphasis">Secure & Private</h3>
                    <p>End-to-end encryption ensures that only you can read your notes. We never share your data.</p>
                </div>
                <div className="feature col">
                    <h3 className="fs-2 text-body-emphasis">Fast & Responsive</h3>
                    <p>A lightning-fast interface that works on mobile, tablet, and desktop flawlessly.</p>
                </div>
            </div>
        </div>
    )
}

export default About

