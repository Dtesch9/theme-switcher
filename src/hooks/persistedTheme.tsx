import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedTheme<T>(key: string, initicalState: T): Response<T> {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);

    return storageValue ? JSON.parse(storageValue) : initicalState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedTheme;
