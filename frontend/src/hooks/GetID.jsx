import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const GetID = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/user/:id')
        setData(response);
        setIsLoading(false);
      } catch (e) {
        setHasError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    hasError
  }
}