import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

export const AdminAddUser = ({ show, onHide }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Fullname</Form.Label>
            <Form.Control type="text" placeholder="Ram Ghimire" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="someone@gmail.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
              <option value="subscriber">Subscriber</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Registr
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
