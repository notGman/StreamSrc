import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Redirect from "./components/Redirect.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/:provider/:id", element: <App /> },
  { path: "/movie/:provider/:id", element: <App /> },
  { path: "/tv/:provider/:id/", element: <App /> },
  { path: "/*", element: <Redirect /> },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
