import React,{useContext, useState} from "react";
import {useFormik} from 'formik';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";



const Emailverify = () => {
    const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
    const navigate = useNavigate();
    const [email, setEmail] = useState({
      email: ""
    });
  
    const validationSchema = Yup.object().shape({
      email: Yup.string().required("email Required"),
    });
  
    const formik = useFormik({
      initialValues: email,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        verifyUser(values)
      },
    });

    const verifyUser = async(data) =>{
          try {
            const user = await axios.post(`${baseUrl}/api/email`,data);
            toast.success(user.data.message);
            navigate('/')
          } catch (error) {
            toast.error(error.response.data.message)
          }
    }

  return (
    <div>
      <div className="container">
        <div className="box-part">
          <h1 className="text-center">Verify Email</h1>
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
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Emailverify;
