import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Spinner,
  Alert,
  Card,
} from "react-bootstrap";
import { useDesigners } from "../../../hooks/useDesigner";

export const AdminDesignerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    currentDesigner: designer,
    detailLoading,
    detailError,
    fetchDesignerById,
  } = useDesigners();

  useEffect(() => {
    if (id) {
      fetchDesignerById(id);
    }
  }, [id, fetchDesignerById]);

  if (detailLoading)
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );

  if (detailError)
    return (
      <Alert variant="danger" className="m-3">
        Error: {detailError.message}
      </Alert>
    );

  if (!designer)
    return (
      <Alert variant="warning" className="m-3">
        No designer data found
      </Alert>
    );

  return (
    <Container className="py-5">
      <Button variant="light" onClick={() => navigate(-1)} className="mb-4">
        ← Back to Designers
      </Button>

      <Card>
        <Card.Body>
          <Row className="mb-4">
            <Col md={2}>
              {designer.image_url && (
                <Image
                  src={designer.image_url}
                  rounded
                  fluid
                  alt={designer.fullname}
                  style={{ width: 200 }}
                />
              )}
            </Col>
            <Col md={8}>
              <h1>{designer.fullname}</h1>
              <p className="text-muted">{designer.location}</p>
              <p>{designer.description}</p>

              {designer.socialmedia && (
                <div className="mt-3">
                  <h5>Social Media</h5>
                  {designer.socialmedia.instagram && (
                    <Button
                      variant="link"
                      href={`https://instagram.com/${designer.socialmedia.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </Button>
                  )}
                  {designer.socialmedia.facebook && (
                    <Button
                      variant="link"
                      href={`https://facebook.com/${designer.socialmedia.facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </Button>
                  )}
                </div>
              )}
            </Col>

            {/* Edit & Delete Buttons Section */}
            <Col md={2} className="d-flex flex-column align-items-end">
              <Button
                variant="primary"
                className="mb-2"
                onClick={() => handleEdit(designer.id)}
              >
                ✏️ Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(designer.id)}
              >
                🗑️ Delete
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <h2 className="mb-4 mt-4">Gallery</h2>
      {designer.designer_gallery?.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {designer.designer_gallery.map((image) => (
            <Col key={image.id}>
              <Image
                src={image.image_url}
                thumbnail
                fluid
                alt={`Design by ${designer.fullname}`}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <p>No gallery images available</p>
      )}
    </Container>
  );
};
