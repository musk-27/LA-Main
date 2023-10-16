import React, { useEffect, useState } from "react";
import { makeRequest } from "./makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [categData, setCategData] = useState([]);
  const [categLoading, setCategLoading] = useState(false);
  const [categError, setCategError] = useState(false);

  // For Blog Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  // For Blog Category
  useEffect(() => {
    const fetchCategData = async () => {
      try {
        setCategLoading(true);
        const res = await makeRequest.get(url);
        setCategData(res.data.data);
      } catch (err) {
        setCategError(true);
      }
      setCategLoading(false);
    };
    fetchCategData();
  }, [url]);
  return {
    data,
    loading,
    error,
    categData,
    categError,
    categLoading,
  };
};

export default useFetch;
