import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './components/Form';
import Table from './components/Table';
import Profiles from './components/Profiles';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleAdd = (record) => {
    setRecords((prevRecords) => [...prevRecords, record]);
  };

  const handleDelete = (email) => {
    setRecords((prevRecords) => prevRecords.filter((record) => record.email !== email));
  };

  const handleEdit = (record) => {
    setSelectedRecord(record);
  };

  const handleUpdate = (updatedRecord) => {
    const updatedRecords = records.map((record) =>
      record.email === updatedRecord.email ? updatedRecord : record
    );
    setRecords(updatedRecords);
    setSelectedRecord(null);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profiles">Profiles</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={(
              <div>
                <Form onAdd={handleAdd} />
                <Table
                  data={records}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onSort={() => console.log('Sorting')}
                />
              </div>
            )}
          />

          <Route
            path="/profiles"
            element={<Profiles data={records} onEdit={handleEdit} />}
          />
        </Routes>

        {selectedRecord && (
          <Form
            key={selectedRecord.email}
            onAdd={handleUpdate}
            initialData={selectedRecord}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
