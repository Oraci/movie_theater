import React, { useState, useEffect } from 'react';

function useDebounce(value, delay = 600) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debounceValue;
}

export default useDebounce;
