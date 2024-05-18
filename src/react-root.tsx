import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world from react new version</div>,
  },
]);

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
