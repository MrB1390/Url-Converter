import axios from "axios";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
  const navigate = useNavigate();
  const logOut = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/logout`,{},{withCredentials: true});
      toast.success(response.data.message);
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              WelCome
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/shortUrl" className="nav-link active">
                    ShortUrl
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/urltable" className="nav-link active">
                    Urltable
                  </Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <button class="btn btn-success" onClick={logOut}>
                  Logut
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
