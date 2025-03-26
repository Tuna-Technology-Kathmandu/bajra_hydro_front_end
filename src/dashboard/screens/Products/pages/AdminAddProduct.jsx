import React, { useState } from "react";
import { Button, Col, Form, Row, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Plus, Trash2 } from "react-bootstrap-icons";

export const AdminAddProduct = () => {
  const [description, setDescription] = useState("");
  const [specification, setSpecification] = useState("");
  const [featuredImage, setFeaturedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSpecificationChange = (value) => {
    setSpecification(value); // Handler for specification
  };

  const handleFeaturedImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFeaturedImage(URL.createObjectURL(file));
    }
  };

  const handleGalleryImagesChange = (e) => {
    const files = e.target.files;
    if (files) {
      const galleryPreviewUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setGalleryImages((prev) => [...prev, ...galleryPreviewUrls]);
    }
  };

  const handleRemoveGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFeaturedImageClick = () => {
    document.getElementById("featured-image-input").click();
  };

  const handleGalleryAddClick = () => {
    document.getElementById("gallery-images-input").click();
  };

  // Add a new tag
  const handleAddTag = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags((prev) => [...prev, newTag]);
        setTagInput(""); // Clear input
      }
    }
  };

  // Remove a tag
  const handleRemoveTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <h3 className="mb-4">Add New Product</h3>
      <Link to="/dashboard/products/">
        <Button variant="danger" className="mb-4">
          Go Back
        </Button>
      </Link>
      <Row>
        <Col lg={8}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title" />
            </Form.Group>

            <Row>
              <Col md={6} sm={12} xs={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option value="">Please Select</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} sm={12} xs={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Author</Form.Label>
                  <Form.Select>
                    <option>Disabled select</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6} sm={12} xs={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Colors</Form.Label>
                  <Form.Select>
                    <option value="">Please Select Color</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                    <option>Category 4</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} sm={12} xs={12} lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Please Select Brand</Form.Label>
                  <Form.Select>
                    <option>Disabled select</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Tags Input Section */}
            <Form.Group className="mb-3">
              <Form.Label>Tags</Form.Label>
              <div className="d-flex align-items-center gap-2">
                <Form.Control
                  type="text"
                  placeholder="Add a tag and press Enter"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={handleAddTag}
                />
                <Button variant="outline-primary" onClick={handleAddTag}>
                  <Plus />
                </Button>
              </div>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    bg="secondary"
                    className="d-flex align-items-center gap-1"
                  >
                    {tag}
                    <Trash2
                      className="cursor-pointer"
                      onClick={() => handleRemoveTag(index)}
                    />
                  </Badge>
                ))}
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter short description"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Detailed Description</Form.Label>
              <ReactQuill
                theme="snow"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter detailed description"
              />
            </Form.Group>

            {/* Specification Field */}
            <Form.Group className="mb-3">
              <Form.Label>Specification</Form.Label>
              <ReactQuill
                theme="snow"
                value={specification}
                onChange={handleSpecificationChange}
                placeholder="Enter product specifications"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={4}>
          {/* Featured Image Section */}
          <Form.Group className="mb-4">
            <Form.Label>Featured Image</Form.Label>
            <div
              className="border rounded p-3 text-center cursor-pointer"
              onClick={handleFeaturedImageClick}
              style={{ minHeight: "150px", position: "relative" }}
            >
              {featuredImage ? (
                <Image
                  src={featuredImage}
                  alt="Featured Preview"
                  fluid
                  style={{ maxHeight: "150px", width: "auto" }}
                />
              ) : (
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                  <Plus size={24} />
                  <p className="mt-2 mb-0">Click to add featured image</p>
                </div>
              )}
            </div>
            <Form.Control
              id="featured-image-input"
              type="file"
              accept="image/*"
              onChange={handleFeaturedImageChange}
              className="d-none"
            />
          </Form.Group>

          {/* Image Gallery Section */}
          <Form.Group className="mb-4">
            <Form.Label>Image Gallery</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <Image
                    src={image}
                    alt={`Gallery Preview ${index + 1}`}
                    fluid
                    style={{ height: "100px", width: "auto", borderRadius: "5px" }}
                  />
                  <Button
                    variant="danger"
                    size="sm"
                    className="position-absolute top-0 end-0 m-1"
                    onClick={() => handleRemoveGalleryImage(index)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              ))}
              <div
                className="border rounded p-3 text-center cursor-pointer d-flex align-items-center justify-content-center"
                onClick={handleGalleryAddClick}
                style={{ height: "100px", width: "100px" }}
              >
                <Plus size={24} />
              </div>
            </div>
            <Form.Control
              id="gallery-images-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryImagesChange}
              className="d-none"
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};