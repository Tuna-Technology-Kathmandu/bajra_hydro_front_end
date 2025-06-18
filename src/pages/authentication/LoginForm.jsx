// src/components/auth/LoginForm.js
import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Eye, EyeSlash, Envelope, Lock } from 'react-bootstrap-icons';
import { useAuth } from '../../hooks/useAuth';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, error, loading } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password, values.rememberMe);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <div className="input-group">
          <span className="input-group-text">
            <Envelope />
          </span>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isInvalid={formik.touched.email && !!formik.errors.email}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <div className="input-group">
          <span className="input-group-text">
            <Lock />
          </span>
          <Form.Control
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={formik.touched.password && !!formik.errors.password}
          />
          <Button
            variant="outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeSlash /> : <Eye />}
          </Button>
        </div>
        {formik.touched.password && formik.errors.password && (
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Remember me"
          name="rememberMe"
          onChange={formik.handleChange}
          checked={formik.values.rememberMe}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className="w-100 mb-3"
        disabled={loading}
      >
        {loading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Logging in...
          </>
        ) : (
          'Login'
        )}
      </Button>
    </Form>
  );
};

export default LoginForm;