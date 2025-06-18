import React from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";

import { useLocation } from "../../../hooks/useLocations";
import { deleteLocation } from "../../../utils/services/dashboard/LocationService";

export const AdminLocationTable = () => {
  const { location, loading, error } = useLocation();

  const handleDeleteImage = async (id) => {
    try {
      let value = confirm("Are you sure you want to delete?");
      if(value){
        await deleteLocation(id);
        window.location.reload();
      }
    } catch (error) {
      throw error;
    }
  };

  if (loading) return <div>Loading blogs...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Provience</th>
          <th>District</th>
          <th>Municipality</th>
          <th>Address</th>
          <th>Coordinates</th>
          <th>Contact No</th>
          <th>Timing</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {location.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.locationBrands.brand_name}</td>
            <td>{item.province}</td>
            <td>{item.district}</td>
            <td>{item.municipality}</td>
            <td>{item.address}</td>
            <td>
              {item.coordinates.lat} | {item.coordinates.long}
            </td>
            <td>{item.phone_no}</td>
            <td>
              <Badge bg="warning">
                {item.timing.opening} - {item.timing.closing}
              </Badge>
            </td>
            <td>
              {/* <Button variant="link" size="sm">
                <Pencil />
              </Button> */}
              <Button
                variant="link"
                size="sm"
                className="text-danger"
                onClick={() => handleDeleteImage(item.id)}
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
