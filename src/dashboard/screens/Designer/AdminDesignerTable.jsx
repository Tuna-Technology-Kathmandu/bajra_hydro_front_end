import React from "react";
import { Table, Button } from "react-bootstrap";
import { Eye, Pencil, Trash } from "react-bootstrap-icons";
import { useDesigners } from "../../../hooks/useDesigner";
import { deleteDesigner } from "../../../utils/services/dashboard/DesignerService";
import { useNavigate } from "react-router-dom";

export const AdminDesignerTable = () => {
  const { designers, loading, error } = useDesigners();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this designer?")) {
        await deleteDesigner(id);
      }
    } catch (error) {
      console.error("Error deleting designer:", error);
      alert("Failed to delete designer");
    }
  };

  if (loading) return <div>Loading designers...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Fullname</th>
          <th>Location</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {designers.map((designer, index) => (
          <tr key={designer.id}>
            <td>{index + 1}</td>
            <td>{designer.fullname}</td>
            <td>{designer.location}</td>
            <td>
              <Button
                variant="link"
                size="sm"
                onClick={() => navigate(`/dashboard/designers/${designer.id}`)}
              >
                {" "}
                <Eye />
              </Button>
              <Button variant="link" size="sm">
                <Pencil />
              </Button>
              <Button
                variant="link"
                size="sm"
                className="text-danger"
                onClick={() => handleDelete(designer.id)}
              >
                <Trash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
