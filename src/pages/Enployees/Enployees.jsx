// Employees.jsx
import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import './employees.css'; // make sure this path is correct

const Employees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Developer", email: "john@example.com" },
  ]);
  const [show, setShow] = useState(false);
  const [newEmp, setNewEmp] = useState({ name: "", role: "", email: "" });

  const handleAdd = () => {
    if (newEmp.name && newEmp.role && newEmp.email) {
      setEmployees([...employees, { id: Date.now(), ...newEmp }]);
      setShow(false);
      setNewEmp({ name: "", role: "", email: "" });
    }
  };

  return (
    <div className="dashboard-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">Employees</h3>
        <Button onClick={() => setShow(true)} variant="primary">+ Add Employee</Button>
      </div>

      <Table striped bordered hover className="employee-table full-width">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={emp.id}>
              <td>{idx + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter name"
                value={newEmp.name}
                onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                placeholder="Enter role"
                value={newEmp.role}
                onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={newEmp.email}
                onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Employees;
