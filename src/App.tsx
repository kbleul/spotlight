import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Suspense/index";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;
