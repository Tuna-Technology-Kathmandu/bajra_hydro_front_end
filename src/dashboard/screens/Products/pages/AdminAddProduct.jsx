import React, { useState } from "react";
import { Button, Col, Form, Row, Image, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Plus, Trash2 } from "react-bootstrap-icons";

export const AdminAddProduct = () => {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [brand, setBrand] = useState("");
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [specification, setSpecification] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", variant: "success" });

  const handleFeaturedImageChange = (e) => setFeaturedImage(e.target.files[0]);
  const handleGalleryImagesChange = (e) => setGalleryImages([...galleryImages, ...Array.from(e.target.files)]);
  const handleAddTag = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      if (tagInput.trim() && !tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
      }
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !categoryId || !description) {
      setToast({ show: true, message: "Title, category, and description are required!", variant: "danger" });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category_id", categoryId);
    formData.append("author_id", authorId);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("specification", specification);
    formData.append("featured_image", featuredImage);
    galleryImages.forEach((image) => formData.append("images", image));
    formData.append("tags", JSON.stringify(tags));
    formData.append("colors", JSON.stringify(colors));

    try {
      const response = await fetch("http://localhost/api/products", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        setToast({ show: true, message: "Product added successfully!", variant: "success" });
      } else {
        setToast({ show: true, message: data.error || "Failed to add product.", variant: "danger" });
      }
    } catch (error) {
      setToast({ show: true, message: "Server error, please try again.", variant: "danger" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="mb-4">Add New Product</h3>
      <Link to="/dashboard/products/">
        <Button variant="danger" className="mb-4">Go Back</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col lg={8}>
            <Form.Group className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category ID</Form.Label>
              <Form.Control type="text" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tags</Form.Label>
              <div className="d-flex gap-2">
                <Form.Control type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyPress={handleAddTag} />
                <Button variant="outline-primary" onClick={handleAddTag}><Plus /></Button>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <ReactQuill theme="snow" value={description} onChange={setDescription} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</Button>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-3">
              <Form.Label>Featured Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleFeaturedImageChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gallery Images</Form.Label>
              <Form.Control type="file" accept="image/*" multiple onChange={handleGalleryImagesChange} />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <ToastContainer position="top-end">
        <Toast bg={toast.variant} show={toast.show} onClose={() => setToast({ ...toast, show: false })} delay={3000} autohide>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
