import { useState, useEffect } from "react";
import axios from "axios";

function useApiCall(url) {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setLoading(false);
      setPayload(response.data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return [loading, payload, error];
}

export default useApiCall;
