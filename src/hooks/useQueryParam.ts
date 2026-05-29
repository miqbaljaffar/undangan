import { useEffect, useState } from 'react';

export default function useQueryParam(key: string, fallback = '') {
  const [value, setValue] = useState(fallback);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    setValue(params.get(key) ?? fallback);
  }, [key, fallback]);

  return value;
}
