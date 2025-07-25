// Meetings.jsx
import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const Meetings = () => {
  const [meetings, setMeetings] = useState([
    { id: 1, topic: "Project Kickoff", time: "10:00 AM", date: "2025-07-25" },
  ]);
  const [show, setShow] = useState(false);
  const [newMeeting, setNewMeeting] = useState({ topic: "", time: "", date: "" });

  const handleAdd = () => {
    setMeetings([...meetings, { id: Date.now(), ...newMeeting }]);
    setShow(false);
    setNewMeeting({ topic: "", time: "", date: "" });
  };

  return (
    <div className="p-4">
      <h3>Meetings</h3>
      <Button onClick={() => setShow(true)}>Add Meeting</Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Topic</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting, idx) => (
            <tr key={meeting.id}>
              <td>{idx + 1}</td>
              <td>{meeting.topic}</td>
              <td>{meeting.time}</td>
              <td>{meeting.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Topic</Form.Label>
              <Form.Control
                value={newMeeting.topic}
                onChange={(e) => setNewMeeting({ ...newMeeting, topic: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={newMeeting.time}
                onChange={(e) => setNewMeeting({ ...newMeeting, time: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newMeeting.date}
                onChange={(e) => setNewMeeting({ ...newMeeting, date: e.target.value })}
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

export default Meetings;
