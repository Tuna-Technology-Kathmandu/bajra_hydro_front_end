import React, { useState } from "react";
import { Table, Button, Modal, Toast } from "react-bootstrap";
import { Eye, Pencil, Trash } from "react-bootstrap-icons";

import { useProducts } from "../../../hooks/useProduct";
import { deleteProduct } from "../../../utils/services/dashboard/ProductService";

export const AdminProductTable = () => {
  const { product, loading, error } = useProducts();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const [showToast, setShowToast] = useState(false); 
  const [toastMessage, setToastMessage] = useState(""); 
  const [toastVariant, setToastVariant] = useState("");

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Function to handle delete button click
  const handleDeleteClick = (id) => {
    setBlogToDelete(id);
    setShowConfirmModal(true);
  };

  // Function to confirm deletion
  const handleConfirmDelete = async () => {
    try {
      await deleteProduct(blogToDelete);
      setShowConfirmModal(false);
      setToastMessage("Blog deleted successfully!");
      setToastVariant("success"); 
      setShowToast(true);
    } catch (err) {
      setShowConfirmModal(false);
      setToastMessage("Failed to delete blog. Please try again.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Brands</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((blog, index) => (
            <tr key={blog.id}>
              <td>{index + 1}</td>
              <td>{blog.title}</td>
              <td>{blog.product_brands.map((brand, index) => (
                <p key={index}>{brand.brand_name}</p>
              ))}</td>
              <td>
                <Button variant="link" size="sm">
                  <Eye />
                </Button>
                <Button variant="link" size="sm">
                  <Pencil />
                </Button>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger"
                  onClick={() => handleDeleteClick(blog.id)}
                >
                  <Trash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Confirmation Modal */}
      <Modal
        show={showConfirmModal}
        onHide={() => setShowConfirmModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this blog?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Bootstrap Toast for Notifications */}
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000} // The toast will auto-dismiss after 3 seconds
        autohide
        className={`position-fixed top-0 end-0 m-3 bg-${toastVariant} text-white`}
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </>
  );
};
