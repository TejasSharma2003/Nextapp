import { createContext, useState } from 'react';

export const LoadingStateContext = createContext(null);

function Context({ children }) {
  const [isLoaderOut, setIsLoaderOut] = useState(false);

  return (
    <LoadingStateContext.Provider value={{ isLoaderOut, setIsLoaderOut }}>
      {children}
    </LoadingStateContext.Provider>
  );
}

export default Context;
