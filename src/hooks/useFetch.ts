import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
     const [data, setData] = useState<any>(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch(url);
                    if (!response.ok) {
                         throw new Error('Network response was not ok');
                    }
                    const result = await response.json();
                    setData(result);
               } catch (error: any) {
                    setError(error.message);
               } finally {
                    setLoading(false);
               }
          };

          fetchData().catch((err) => {
               console.error('Fetch failed:', err);
          });
     }, [url]);

     return { data, loading, error };
};

export default useFetch;
