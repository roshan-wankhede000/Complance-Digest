import axios from 'axios'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Admin() {
  let navigate = useNavigate()
  function handleSubmit(e) {
    
    e.preventDefault()

   let data = {
    compony: e.target.compony.value,
    hospital: e.target.hospital.value,
    address: e.target.address.value,
    state: e.target.state.value,
    place: e.target.place.value,
    pincode: e.target.pincode.value
  };
    

    axios.post("http://localhost:8000/addInsurance", data)
    .then(()=>{
      console.log("success, dictionary sent")
      navigate("/")
    })
    

  }
  return (
    <>
    <div className='w-100 d-flex justify-content-center my-5'>
        <div class="card shadow-lg p-4 w-50">
    <h3 class="text-center mb-4">Insurance Form</h3>
    
    <form onSubmit={(e)=>handleSubmit(e)} method='post'>
      <div class="mb-3">
        <label for="company" class="form-label">Company Name</label>
        <input type="text" class="form-control" name="compony" placeholder="Enter insurance company" required />
      </div>

      <div class="mb-3">
        <label for="company" class="form-label">Hospital Name</label>
        <input type="text" class="form-control" name="hospital" placeholder="Enter insurance company" required />
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <textarea class="form-control" name="address" rows="3" placeholder="Enter address" required></textarea>
      </div>

       <div class="mb-3">
        <label for="address" class="form-label">State</label>
        <textarea class="form-control" name="state" rows="3" placeholder="Enter address" required></textarea>
      </div>

      <div class="mb-3">
        <label for="date" class="form-label">City/Place</label>
        <input type="date" class="form-control" name='place' required />
      </div>

      <div class="mb-3">
        <label for="eid" class="form-label">Pincode</label>
        <input type="text" class="form-control" name="pincode" placeholder="Ensurance ID" required />
      </div>

      <button type='submit' className='btn btn-outline-dark'>Submit</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Admin