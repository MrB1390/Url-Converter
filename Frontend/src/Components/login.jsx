import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
  console.log(baseUrl);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("email Required"),
    password: Yup.string().required("password Required"),
  });

  const formik = useFormik({
    initialValues: login,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const loginUser = async (data) => {
    try {
      await axios.post(`${baseUrl}/api/login`, data,{withCredentials:true}).then((res) => {
        toast.success(res.data.message);
        formik.resetForm();
        navigate('/shorturl');
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="box-part">
          <h1 className="text-center">Login User</h1>
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-2">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <br />
              <div className="text-danger">{formik.errors.email}</div>
            </div>
            <div class="mb-2">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Enter your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <br />
              <div className="text-danger">{formik.errors.password}</div>
            </div>
            <div className="mb-3 ms-1">
              <Link to="/verify">Forgot Password?</Link>
            </div>
            <div className="mb-3 ms-1">
              <Link to="/add">Register</Link>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign-in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
