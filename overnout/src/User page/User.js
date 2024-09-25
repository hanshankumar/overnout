import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './User.css'; 

function UserProfile() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthdate: '',
    country: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (step === 1) {
      const { name, phone, birthdate, country } = formData;
      if (!name || !phone || !birthdate || !country) {
        alert("Please fill out all fields in this step.");
        return;
      }
    }

    if (step === 2) {
      const { email, password, confirmPassword } = formData;
      if (!email || !password || !confirmPassword) {
        alert("Please fill out all fields in this step.");
        return;
      }
 
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
    }

    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    
    alert('Successfully logged in!');

    setFormData({
      name: '',
      phone: '',
      birthdate: '',
      country: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
 
    setStep(1);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card dark-shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="birthdate" className="form-label">Birthdate</label>
                      <input
                        type="date"
                        className="form-control"
                        id="birthdate"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="country" className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={nextStep}>
                      Next
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="button" className="btn btn-secondary" onClick={prevStep}>
                      Back
                    </button>
                    <button type="submit" className="btn btn-success ms-2">
                      Submit
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
