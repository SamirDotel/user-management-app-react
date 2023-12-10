import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Profile.css'

const Profiles = ({ data, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Profiles</h2>
      {data.map((profile) => (
        <div key={profile.email} className="profile-container">
          <h3>{profile.name}</h3>
          <p>Email: {profile.email}</p>
          <p>Phone Number: {profile.phoneNumber}</p>
          <p>Date of Birth: {profile.dob}</p>
          <button className="edit-btn" onClick={() => onEdit(profile)}> <FontAwesomeIcon icon={faEdit} /> </button>
          <button className="delete-btn" onClick={() => onDelete(profile.email)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
