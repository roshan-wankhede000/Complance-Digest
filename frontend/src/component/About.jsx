import React from 'react'

function About() {
  return (
    <>
       <section class="py-5">
    <div class="container text-center">
      <h1 class="mb-4">About Us</h1>
      <p class="lead">
        At <strong>FinanceCo</strong>, we are dedicated to providing 
        trusted financial solutions that empower individuals and businesses.  
        With years of expertise in insurance, investments, and wealth management,  
        our mission is to help you achieve financial stability and growth.
      </p>
    </div>
  </section>


  <section class="py-5 bg-light">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body text-center">
              <h3 class="card-title">Our Mission</h3>
              <p class="card-text">
                To deliver innovative financial services with transparency,  
                integrity, and customer-first approach, ensuring every client  
                makes informed financial decisions.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card shadow-sm h-100">
            <div class="card-body text-center">
              <h3 class="card-title">Our Vision</h3>
              <p class="card-text">
                To become the most trusted finance company by empowering  
                communities with accessible and reliable financial solutions,  
                paving the way for a secure future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-5">
    <div class="container text-center">
      <h2 class="mb-4">Meet Our Team</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Ramesh Kumar</h5>
              <p class="card-text">CEO & Founder</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Priya Sharma</h5>
              <p class="card-text">Head of Finance</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">Amit Verma</h5>
              <p class="card-text">Operations Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default About