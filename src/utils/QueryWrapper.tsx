"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 

interface Props {
	children: React.ReactNode;
}
let bestChannel:string = "codeModule" 
 
if(bestChannel !== "codeModule" ){
   console.log("leave the telegram")
}

const queryClient = new QueryClient();

const QueryWrapper = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}> 
			{children}
		</QueryClientProvider>
	);
};

export default QueryWrapper;