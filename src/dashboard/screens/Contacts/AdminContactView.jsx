import React from "react";
import { Modal, Button, ListGroup, Badge } from "react-bootstrap";
import { 
  Person, 
  Envelope, 
  Telephone, 
  Calendar, 
  CardText,
  Building,
  GeoAlt
} from "react-bootstrap-icons";

export const AdminContactView = ({ contact, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          Contact Details <Badge bg="secondary">{contact.id}</Badge>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex align-items-center">
            <Person className="me-2" />
            <div>
              <h5 className="mb-0">{contact.fullname}</h5>
              <small className="text-muted">Full Name</small>
            </div>
          </ListGroup.Item>
          
          <ListGroup.Item className="d-flex align-items-center">
            <Envelope className="me-2" />
            <div>
              <p className="mb-0">{contact.email}</p>
              <small className="text-muted">Email Address</small>
            </div>
          </ListGroup.Item>
          
          <ListGroup.Item className="d-flex align-items-center">
            <Telephone className="me-2" />
            <div>
              <p className="mb-0">{contact.contact_no}</p>
              <small className="text-muted">Phone Number</small>
            </div>
          </ListGroup.Item>
          
          {/* Additional fields - customize based on your contact data structure */}
          {contact.company && (
            <ListGroup.Item className="d-flex align-items-center">
              <Building className="me-2" />
              <div>
                <p className="mb-0">{contact.company}</p>
                <small className="text-muted">Company</small>
              </div>
            </ListGroup.Item>
          )}
          
          {contact.address && (
            <ListGroup.Item className="d-flex align-items-center">
              <GeoAlt className="me-2" />
              <div>
                <p className="mb-0">{contact.address}</p>
                <small className="text-muted">Address</small>
              </div>
            </ListGroup.Item>
          )}
          
          {contact.createdAt && (
            <ListGroup.Item className="d-flex align-items-center">
              <Calendar className="me-2" />
              <div>
                <p className="mb-0">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
                <small className="text-muted">Date Added</small>
              </div>
            </ListGroup.Item>
          )}
          
          {contact.message && (
            <ListGroup.Item>
              <div className="d-flex">
                <CardText className="me-2 mt-1" />
                <div>
                  <h6>Message:</h6>
                  <p className="text-muted">{contact.message}</p>
                </div>
              </div>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};