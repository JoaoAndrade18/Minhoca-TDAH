import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";


export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | minhoca TDAH" />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}