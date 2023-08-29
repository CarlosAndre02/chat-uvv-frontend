import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { theme } from './theme';

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </BrowserRouter>
  );
};
