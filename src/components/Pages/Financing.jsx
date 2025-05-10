import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

function Financing() {
  return (
    <div>
      <Navbar/>
      <div className="container mt-5">
        <h1 className="text-center">Financing Options</h1>
        <p>Explore our flexible financing plans and find the one that suits your needs.</p>

        <div className="mt-4">
          <h2>Our Financing Options</h2>
          <ul>
            <li>Flexible loan terms: 36, 48, or 60 months.</li>
            <li>Competitive interest rates starting at 3.5% APR.</li>
            <li>Special promotions for first-time buyers.</li>
          </ul>
        </div>

        <div className="mt-5">
          <h2>Apply for Financing Pre-Approval</h2>
          <form>
            <div className="row mb-3">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number:</label>
              <div className="col-sm-10">
                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit Application</button>
          </form>
        </div>

        <div className="mt-5">
          <h2>Why Finance with Us?</h2>
          <ul>
            <li>Low interest rates and flexible terms.</li>
            <li>Quick and easy approval process.</li>
            <li>No hidden fees or charges.</li>
            <li>Special discounts for loyal customers.</li>
          </ul>
        </div>

        <div className="mt-5">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  What is the minimum down payment required?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  The minimum down payment depends on the car price and your credit score. Contact us for more details.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Can I refinance my loan later?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, refinancing options are available. Contact our team to learn more.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-5">
          <h2>Contact Our Financing Team</h2>
          <p>Email: <a href="mailto:financing@primedrive.com">financing@primedrive.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Financing
