import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const Urltable = () => {
  const baseUrl = import.meta.env.VITE_PUBLIC_BACKEND_URL;
  const [urlTable, setUrlTable] = useState([]);
  useEffect(() => {
    urlValue();
  }, []);
  const urlValue = async () => {
    try {
      const response = await axios.get(`${baseUrl}/apiUrl/url`,{
        withCredentials: true
    });
      setUrlTable(response.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const redirectUrl = async(short) => {
    try {
        const response = await axios.get(`${baseUrl}/apiUrl/${short}`,{
            withCredentials: true
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div>
      <h1 className="text-center">URL TABLE</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Url Name</th>
            <th scope="col">Url</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        {urlTable.map((item, index) => {
          return (
            <>
              <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                      <p class="fw-normal mb-1">{item.urlName}</p>
                      </td>
                      <td>
                        <p class="fw-normal mb-1">{item.shortUrl}</p>
                      </td>
                      <td>
                      <button className="btn btn-primary" onClick={() =>{redirectUrl(item.shortUrl)}}> 
                          Redirect
                      </button>
                      </td>
                      </tr>
            </>
          );
        })}
         </tbody>
      </table>
    </div>
  );
};

export default Urltable;
