import axios from 'axios';
import { useState, useEffect } from 'react';

function ApiCall() {
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/board');
      setLoading(false);
      setPayload(response.data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === true) {
    return <div>로딩중입니다</div>;
  }
  if (error !== null) {
    return <div>에러입니다.</div>;
  }
  return <div>{JSON.stringify(payload)}</div>;
}

export default ApiCall;
