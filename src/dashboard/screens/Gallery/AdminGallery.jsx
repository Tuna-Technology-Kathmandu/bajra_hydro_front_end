import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { AdminAddGallery } from "./AdminAddGallery";
import { useGallery } from "../../../hooks/useGallery";

export const AdminGallery = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  // Sample images (Replace with actual image URLs)
  const [images, setImages] = useState([
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ]);

  // Handle delete image
  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleAddBlog = () => {
    setShowAddModal(true);
  };

  const { gallery, loading, error } = useGallery();

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(gallery);

  return (
    <div>
      <h3 className="mb-4">Gallery Management</h3>
      <Button variant="primary" onClick={handleAddBlog} className="mb-4">
        Upload Image
      </Button>
      <div className="d-flex flex-wrap gap-3">
        {gallery.map((src, index) => (
          
          <Card key={index} style={{ width: "200px", position: "relative" }}>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleDelete(index)}
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                padding: "2px 5px",
                fontSize: "12px",
              }}
            >
              <Trash size={12} />
            </Button>
            <Card.Img variant="top" src={src.image_url} />
          </Card>
        ))}
      </div>
      <AdminAddGallery
        show={showAddModal}
        onHide={() => setShowAddModal(false)}
      />
    </div>
  );
};
