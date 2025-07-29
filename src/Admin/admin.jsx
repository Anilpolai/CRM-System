import React from 'react'

const admin = () => {
  return (
    <div>
             
            <Form.Group>
              <Form.Label>Status</Form.Label>
              <Form.Control
                value={newTask.status}
                onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>  
                <option value="completed">Completed</option>
                  
                   </Form.Control>
               </Form.Group>
    </div>
  )
}

export default admin