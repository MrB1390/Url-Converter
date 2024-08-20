import React,{useContext,useEffect, useState} from "react";
import {useFormik} from 'formik';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const PasswordReset = () => {
    const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
    const navigate = useNavigate();
    const [password, setPassword] = useState({
      password: "",
      confirmPassword:""
    });

  
    const validationSchema = Yup.object().shape({
      password: Yup.string().required("Password Required"),
      confirmPassword: Yup.string().required("Confirm Password Required"),
    });
  
    const formik = useFormik({
      initialValues: password,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        resetPassword(values)
      },
    });
    const resetPassword = async(data) =>{
          try {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            const user = await axios.put(`${baseUrl}/api/reset`, data,{
              headers:{
                Authorization: token
              }
            });
            toast.success(user.data.message);
            navigate('/');
          } catch (error) {
            toast.error(error.response.data.message)
          }
    }
  return (
    <div>
      <div className="container">
        <div className="box-part">
          <h1 className="text-center">RESET-PASSWORD</h1>
          <form onSubmit={formik.handleSubmit}>
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
            <div class="mb-2">
              <label for="password" class="form-label">
               Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                name="confirmPassword"
                placeholder="Enter your Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <br />
              <div className="text-danger">{formik.errors.confirmPassword}</div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
