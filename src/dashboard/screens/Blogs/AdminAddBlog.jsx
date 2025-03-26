import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap";
import { createBlog } from "../../../utils/services/dashboard/BlogService";

export const AdminAddBlog = ({ onHide }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleExcerptChange = (value) => {
    setExcerpt(value);
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
      } else {
        setError("Please select a valid image file.");
        setImage(null);
        setImagePreview(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      setLoading(true);

      // Create FormData for file upload
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);

      // Ensure tags are sent as an array (not a string)
      const tagsArray = tags.split(",").map((tag) => tag.trim());
      formData.append("tags", JSON.stringify(tagsArray)); // Send tags as JSON array

      formData.append("excerpt", excerpt);
      formData.append("content", content);
      if (image) {
        formData.append("featured_image", image); // Append image
      }

      await createBlog(formData);
      onHide(); // Close modal or reset state

      // Reset form after submission
      setTitle("");
      setCategory("");
      setTags("");
      setExcerpt("");
      setContent("");
      setImage(null);
      setImagePreview(null);
    } catch (err) {
      setError("Failed to create blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3 className="mb-4">Add New Blog</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </Form.Group>
        <Row className="mb-3">
          <Col lg={6} md={6} sm={12}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Form.Group>
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Comma-separated tags"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Excerpt</Form.Label>
          <ReactQuill
            theme="snow"
            value={excerpt}
            onChange={handleExcerptChange}
            placeholder="Enter detailed description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter detailed description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Featured Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt="Image Preview"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? <Spinner size="sm" animation="border" /> : "Save"}
        </Button>
      </Form>
    </div>
  );
};
