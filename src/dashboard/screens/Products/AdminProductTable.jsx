import React from "react";
import { Table, Button } from "react-bootstrap";
import { Eye, Pencil, Trash } from "react-bootstrap-icons";

export const AdminProductTable = () => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Author</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>This is the Glass of Wate</td>
          <td>Glass Fitting</td>
          <td>John Doe</td>
          <td>Email</td>
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
      </tbody>
    </Table>
  );
};
