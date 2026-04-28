"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBlogData } from "../redux/blogSlice";
import { base_url } from "../config/config";

const useBlogData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`${base_url}/api/allWebsiteBlog`);

      if (response.data.success) {
        dispatch(setBlogData(response.data.data));
      } else {
        throw new Error(
          response.data.message || "Failed to fetch project data",
        );
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch project data";
      console.log("errorr ", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [dispatch]);

  return loading;
};

export default useBlogData;