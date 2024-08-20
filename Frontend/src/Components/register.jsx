import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
  const navigate = useNavigate();
  const [add, setAdd] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("first name Required"),
    lastName: Yup.string().required("last name Required"),
    email: Yup.string().required("email Required"),
    password: Yup.string().required("password Required"),
  });

  const formik = useFormik({
    initialValues: add,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createUser(values);
    },
  });

  const createUser = async (data) => {
    try {
      await axios.post(`${baseUrl}/api/userDetails`, data)
      .then((res)=>{
        toast.success(res.data.message);
        navigate('/')
        formik.resetForm();
      })
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="box-part">
          <h1 className="text-center">Add User</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3">
                    <label for="Firstname" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="firstName"
                      placeholder="Enter your Firstname"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    <br />
                    <div className="text-danger">{formik.errors.firstName}</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <label for="Lastname" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="lastName"
                      placeholder="Enter your Last Name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    <br />
                    <div className="text-danger">{formik.errors.lastName}</div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
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
              <div class="mb-3">
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
              <div className="d-flex justify-content-between">
                <Link to='/'>
                 Back
                </Link>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Register;
