// Employees.jsx
import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const Employees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Developer", email: "john@example.com" },
  ]);
  const [show, setShow] = useState(false);
  const [newEmp, setNewEmp] = useState({ name: "", role: "", email: "" });

  const handleAdd = () => {
    setEmployees([...employees, { id: Date.now(), ...newEmp }]);
    setShow(false);
    setNewEmp({ name: "", role: "", email: "" });
  };

  return (
    <div className="p-4">
      <h3>Employees</h3>
      <Button onClick={() => setShow(true)}>Add Employee</Button>
      <Table striped bordered hover className="mt-3">
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

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={newEmp.name}
                onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                value={newEmp.role}
                onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={newEmp.email}
                onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Employees;
