import { Heading } from "@chakra-ui/react";

import { Providers } from "./providers";

export function App() {
  return (
    <Providers>
      <Heading as="h1">Hello world</Heading>
    </Providers>
  );
}
