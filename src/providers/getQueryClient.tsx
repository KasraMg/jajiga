import { QueryClient } from '@tanstack/react-query';

const getQueryClient = () => {
  return new QueryClient();
};

export { getQueryClient };