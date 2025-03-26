import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AdminLocationTable } from "./AdminLocationTable";

export const AdminLocation = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddBlog = () => {
    setShowAddModal(true);
  };

  return (
    <div>
      <h3 className="mb-4">Location Management</h3>
      <Button variant="primary" onClick={handleAddBlog} className="mb-4">
        Add New Blog
      </Button>
      <AdminLocationTable />
      {/* <AdminAddBlog show={showAddModal} onHide={() => setShowAddModal(false)} /> */}
    </div>
  );
};
