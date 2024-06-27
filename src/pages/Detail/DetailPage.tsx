import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

export const DetailPage = () => {
  const [searchParams] = useSearchParams();

  const [query, setQuery] = useState<string | null>(null);

  useEffect(() => {
    const tempQuery = searchParams.get('query');
    if (tempQuery !== undefined && tempQuery !== null && tempQuery !== '') {
      setQuery(tempQuery!);
    }
  }, []);

  return (
    <>
      {query ? (
        <section>
          <h1>Note {query} </h1>
          <h2>Category</h2>
        </section>
      ) : (
        <>
          <h1>Invalid selection</h1>
        </>
      )}
    </>
  );
};
