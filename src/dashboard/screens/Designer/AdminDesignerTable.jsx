import React from "react";
import { Table, Button } from "react-bootstrap";
import { Eye, Pencil, Trash } from "react-bootstrap-icons";

import { useDesigners } from "../../../hooks/useDesigner";

export const AdminDesignerTable = () => {
  const { designers, loading, error } = useDesigners();

  if (loading) return <div>Loading blogs...</div>;
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
        {designers.map((blog, index) => (
          <tr key={blog.id}>
            <td>{index + 1}</td>
            <td>{blog.fullname}</td>
            <td>{blog.location}</td>
            <td>
              <Button variant="link" size="sm">
                <Eye />
              </Button>
              <Button variant="link" size="sm">
                <Pencil />
              </Button>
              <Button variant="link" size="sm" className="text-danger">
                <Trash />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
