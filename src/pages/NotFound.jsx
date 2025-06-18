import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center bg-light text-center">
      <div className="error-container">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-3">Oops! Page Not Found</h2>
        <p className="text-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary px-4 py-2">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
