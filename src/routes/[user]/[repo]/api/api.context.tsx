import { createContext, FC, useContext } from 'react';

export interface ApiValue {
  user: string;
  repo: string;
}

const ApiContext = createContext<ApiValue | undefined>(undefined);

export const Api: FC<ApiValue> = ({ children, user, repo }) => {
  return <ApiContext.Provider value={{ user, repo }}>{children}</ApiContext.Provider>;
};

export const useApi = (): ApiValue => {
  const context = useContext(ApiContext);

  if (context === undefined) {
    throw new ReferenceError('Use Api inside its provider.');
  }

  return context;
};
