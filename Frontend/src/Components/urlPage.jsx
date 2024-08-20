import React,{useState} from 'react';
import {useFormik} from 'formik';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Urlpage = () => {
    const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
    const navigate = useNavigate();
    const [urlVal, setUrlVal] = useState({
      longUrl: "",
      urlName:""
    });
  
    const validationSchema = Yup.object().shape({
      longUrl: Yup.string().required("Url Required"),
      urlName: Yup.string().required("Url Name Required"),
    });
  
    const formik = useFormik({
      initialValues: urlVal,
      validationSchema: validationSchema,
      onSubmit: (values) => {
        urlShorten(values)
      },
    });

    const urlShorten = async(data) =>{
          try {
            const userUrl = await axios.post(`${baseUrl}/apiUrl/shortUrl`,data,{
              withCredentials: true
            });
            toast.success(userUrl.data.message);
            formik.resetForm();
          } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
              } else {
                toast.error("An error occurred. Please try again later.");
              }
          }
    }

  return (
    <div>
      <div className="container">
        <div className="box-part">
          <h1 className="text-center">Shortern Url</h1>
          <form onSubmit={formik.handleSubmit}>
            <div class="mb-2">
              <label for="longUrl" class="form-label">
                Url
              </label>
              <input
                type="url"
                class="form-control"
                name="longUrl"
                placeholder="Enter your url"
                value={formik.values.longUrl}
                onChange={formik.handleChange}
              />
              <br />
              <div className="text-danger">{formik.errors.longUrl}</div>
            </div>
            <div class="mb-2">
              <label for="name" class="form-label">
                Url Name
              </label>
              <input
                type="text"
                class="form-control"
                name="urlName"
                placeholder="Enter your url name"
                value={formik.values.urlName}
                onChange={formik.handleChange}
              />
              <br />
              <div className="text-danger">{formik.errors.urlName}</div>
            </div>
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary w-50">
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Urlpage;