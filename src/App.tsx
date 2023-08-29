import { Providers } from "./providers";
import { AppRoutes } from "./routes/Routes";

export function App() {
  return (
    <Providers>
      <AppRoutes></AppRoutes>
    </Providers>
  );
}
