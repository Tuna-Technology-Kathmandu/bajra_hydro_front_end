import React, { useState } from "react";
import { Button, Col, Form, Row, Image, Badge, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Plus, Trash2 } from "react-bootstrap-icons";

export const AdminAddProduct = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [colors, setColors] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [specification, setSpecification] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", variant: "success" });

  const handleFeaturedImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(file);
    }
  };

  const handleGalleryImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      setGalleryImages((prev) => [...prev, ...files]);
    }
  };

  const handleRemoveGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddTag = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const handleRemoveTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || !description) {
      setToast({ show: true, message: "Title, category, and description are required!", variant: "danger" });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("colors", colors);
    formData.append("brand", brand);
    formData.append("description", description);
    formData.append("specification", specification);
    formData.append("featuredImage", featuredImage);
    galleryImages.forEach((image, index) => formData.append(`galleryImages`, image));
    formData.append("tags", JSON.stringify(tags));

    try {
      const response = await fetch("http://localhost:/api/products", {
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
              <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control type="text" placeholder="Enter Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Author</Form.Label>
                  <Form.Control type="text" placeholder="Enter Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Tags</Form.Label>
              <div className="d-flex align-items-center gap-2">
                <Form.Control type="text" placeholder="Add a tag and press Enter" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyPress={handleAddTag} />
                <Button variant="outline-primary" onClick={handleAddTag}><Plus /></Button>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <Badge key={index} bg="secondary">
                    {tag} <Trash2 className="cursor-pointer" onClick={() => handleRemoveTag(index)} />
                  </Badge>
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Detailed Description</Form.Label>
              <ReactQuill theme="snow" value={description} onChange={setDescription} placeholder="Enter detailed description" />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </Col>

          <Col lg={4}>
            <Form.Group className="mb-4">
              <Form.Label>Featured Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleFeaturedImageChange} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Image Gallery</Form.Label>
              <Form.Control type="file" accept="image/*" multiple onChange={handleGalleryImagesChange} />
              <div className="d-flex flex-wrap gap-2 mt-2">
                {galleryImages.map((file, index) => (
                  <div key={index} className="position-relative">
                    <Image src={URL.createObjectURL(file)} alt={`Gallery ${index}`} fluid height="100" width="auto" />
                    <Button variant="danger" size="sm" className="position-absolute top-0 end-0 m-1" onClick={() => handleRemoveGalleryImage(index)}>
                      <Trash2 />
                    </Button>
                  </div>
                ))}
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast bg={toast.variant} show={toast.show} onClose={() => setToast({ ...toast, show: false })} delay={3000} autohide>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};
