import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ForSale() {
  const router = useRouter();
  const { location } = router.query;

  const [response, setResponse] = useState('Loading..');

  useEffect(() => {
    fetch(`/api/search/${location}`)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [location]);

  return (
    <div>
      {location}
      {JSON.stringify(response, null, 2)}
    </div>
  );
}
