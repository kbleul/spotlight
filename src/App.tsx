import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";

import Services from "./pages/Services";
import Header from "./components/Header";
import Works from "./pages/Works";
import About from "./pages/About";
import Culture from "./pages/Culture";
import Feeds from "./pages/Feeds";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudy from "./pages/CaseStudy";

const Layout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
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
        path: "/feeds",
        element: <Feeds />,
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
