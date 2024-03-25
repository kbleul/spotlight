import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Suspense/index";
import { useState } from "react";
import Services from "./pages/Services";
import Header from "./components/Header";
import Works from "./pages/Works";
import About from "./pages/About";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/works",
        element: <Works />,
      },
    ],
  },
  // {
  //   path: "services",
  //   element: <Services />,
  // },
  // {
  //   path: "about",
  //   element: <div>About</div>,
  // },
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
