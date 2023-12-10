import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Table.css';

const Table = ({ data, onDelete, onEdit, onSort }) => {
  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th onClick={onSort}>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Date of Birth</th>
          <th>City</th>
          <th>District</th>
          <th>Province</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record) => (
          <tr key={record.email}>
            <td>{record.name}</td>
            <td>{record.email}</td>
            <td>{record.phoneNumber}</td>
            <td>{record.dob}</td>
            <td>{record.address.city}</td>
            <td>{record.address.district}</td>
            <td>{record.address.province}</td>
            <td>
              <button className="edit-btn" onClick={() => onEdit(record)}> <FontAwesomeIcon icon={faEdit} /> </button>
              <button className="delete-btn" onClick={() => onDelete(record.email)}>  <FontAwesomeIcon icon={faTrash} /> </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
 <div className="view-profiles-btn-container">
 <Link to="/profiles">
   <button className="view-profiles-btn">View Profiles</button>
 </Link>
</div>
</div>

  );
};

export default Table;
