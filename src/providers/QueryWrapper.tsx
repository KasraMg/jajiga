'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      {children} 
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;