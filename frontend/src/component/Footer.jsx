import React from 'react'

function Footer() {
  return (
    <>
        <footer class="bg-dark text-light mt-auto py-4">
    <div class="container">
      <div class="row">
        
        <div class="col-md-4 mb-3">
          <h5>About Us</h5>
          <p class="small">
            We provide reliable insurance data, analysis, and insights to help you make informed decisions.
          </p>
        </div>

        <div class="col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-decoration-none text-light">Home</a></li>
            <li><a href="#" class="text-decoration-none text-light">About</a></li>
            <li><a href="#" class="text-decoration-none text-light">Services</a></li>
            <li><a href="#" class="text-decoration-none text-light">Contact</a></li>
          </ul>
        </div>

        <div class="col-md-4 mb-3">
          <h5>Contact</h5>
          <p class="small mb-1">📍 Mumbai, India</p>
          <p class="small mb-1">📞 +91 98765 43210</p>
          <p class="small">✉️ info@insurance.com</p>
        </div>
      </div>

      <hr class="border-light" />

      <div class="text-center">
        <p class="mb-0 small">© 2025 Insurance Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer