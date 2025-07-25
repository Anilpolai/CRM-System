// Tasks.jsx
import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix bug", assignedTo: "John", status: "In Progress" },
  ]);
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", assignedTo: "", status: "" });

  const handleAdd = () => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
    setShow(false);
    setNewTask({ title: "", assignedTo: "", status: "" });
  };

  return (
    <div className="p-4">
      <h3>Tasks</h3>
      <Button onClick={() => setShow(true)}>Add Task</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr key={task.id}>
              <td>{idx + 1}</td>
              <td>{task.title}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Assigned To</Form.Label>
              <Form.Control
                value={newTask.assignedTo}
                onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                value={newTask.status}
                onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
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

export default Tasks;
