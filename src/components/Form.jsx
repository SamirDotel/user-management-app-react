import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = ({ onAdd, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dob: '',  
    address: {
      city: '',
      district: '',
      province: '',
      country: 'Nepal',
    },
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    dob: '',  
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      address: {
        ...prevErrors.address,
        [name]: '',
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phoneNumber, dob } = formData; 
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{7,}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must be at least 7 digits';
    }

    if (!dob.trim()) {  
      newErrors.dob = 'Date of Birth is required';
    }

    const { city, district, province } = formData.address;
    if (!city.trim()) {
      newErrors.address = {
        ...newErrors.address,
        city: 'City is required',
      };
    }
    if (!district.trim()) {
      newErrors.address = {
        ...newErrors.address,
        district: 'District is required',
      };
    }
    if (!province.trim()) {
      newErrors.address = {
        ...newErrors.address,
        province: 'Province is required',
      };
    }

    if (Object.keys(newErrors).length === 0) {
      onAdd(formData);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        dob: '',
        address: {
          city: '',
          district: '',
          province: '',
          country: 'Nepal',
        },
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-field">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-field">
        <label>Phone Number:</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
      </div>

      <div className="form-field">
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        {errors.dob && <span className="error">{errors.dob}</span>}
      </div>

      <div className="form-field">
        <label>City:</label>
        <input type="text" name="city" value={formData.address.city} onChange={handleAddressChange} />
        {errors.address && errors.address.city && <span className="error">{errors.address.city}</span>}
      </div>

      <div className="form-field">
        <label>District:</label>
        <input type="text" name="district" value={formData.address.district} onChange={handleAddressChange} />
        {errors.address && errors.address.district && <span className="error">{errors.address.district}</span>}
      </div>

      <div className="form-field">
        <label>Province:</label>
        <select name="province" value={formData.address.province} onChange={handleAddressChange}>
          <option value="">Select Province</option>
          <option value="1">Province 1</option>
          <option value="2">Province 2</option>
          <option value="3">Bagmati Province</option>
          <option value="4">Gandaki Province</option>
          <option value="5">Lumbini Province</option>
          <option value="6">Karnali Province</option>
          <option value="7">Sudurpashchim Province</option>
        </select>
        {errors.address && errors.address.province && <span className="error">{errors.address.province}</span>}
      </div>

      <button type="submit">Add Record</button>
    </form>
  );
};

export default Form;
