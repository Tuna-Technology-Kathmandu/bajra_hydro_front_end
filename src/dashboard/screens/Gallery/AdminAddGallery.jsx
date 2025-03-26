import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

export const AdminAddGallery = ({ show, onHide }) => {


  const [image, setImage] = useState(null); // Store uploaded image

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a preview URL
      setImage(imageUrl);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Display uploaded image if exists */}
          {image && (
            <div className="text-center mb-3">
              <img
                src={image}
                alt="Uploaded"
                style={{
                  maxWidth: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          )}

          {/* Image Upload Button */}
          <Form.Group className="mb-3 text-center">
            <Form.Label className="btn btn-secondary">
              {image ? "Change Image" : "Upload Image"}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </Form.Label>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
