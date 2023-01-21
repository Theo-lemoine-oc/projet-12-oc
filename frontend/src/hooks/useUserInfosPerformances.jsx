import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000/`
});

export const useUserInfosPerformances = (id) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('user/:id/performance'.replace(':id', id))
        setData(response.data.data);
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