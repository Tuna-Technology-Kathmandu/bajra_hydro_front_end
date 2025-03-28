import React from "react";
import { useParams } from "react-router";
import { useCatalogueDetails } from "../../../../hooks/useCatalogue";
import { Container } from "react-bootstrap";

export const AdminCatalogueDetail = () => {
  const { id } = useParams();
  const { details, loading, error } = useCatalogueDetails(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h2>Catalog Viewer</h2>

      <iframe
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(
          details.image_url
        )}&embedded=true`}
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </Container>
  );
};
