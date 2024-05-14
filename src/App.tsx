import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";

import Header from "./components/Header";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";
import Loading from "./components/Suspense";

const Services = lazy(() => import("./pages/Services"));
const Works = lazy(() => import("./pages/Works"));
const About = lazy(() => import("./pages/About"));
const Culture = lazy(() => import("./pages/Culture"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));

const Layout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <ContactUs />
      <Footer />
    </QueryClientProvider>
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
      {
        path: "/culture",
        element: <Culture />,
      },
      {
        path: "/case-study/:id",
        element: <CaseStudy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
