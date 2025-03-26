import React from "react";
import { Table, Button } from "react-bootstrap";
import { Eye, Pencil, Trash } from "react-bootstrap-icons";

import { useBlogs } from "../../../hooks/useBlogs";

export const AdminBlogTable = () => {
  const { blogs, loading, error } = useBlogs();

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Tags</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog, index) => (
          <tr key={blog.id}>
            <td>{index + 1}</td>
            <td>{blog.title}</td>
            <td>{blog.blogCategory.name}</td>
            <td>{blog.tags}</td>
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
