import React, { useEffect, useState } from 'react';
import axios from 'axios';

//base url
const api = axios.create({
  baseURL: `http://localhost:3000/`
});


// useUserInfosTime : Retrieves average time data from user's sport sessions
export const useUserInfosTime = (id) => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('user/:id/average-sessions'.replace(':id', id))
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