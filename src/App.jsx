import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Event from "./pages/Events/Event";

function App() {
  const Layout = () => {
    return (
      <div className="layout">
        <Navbar />
        <Outlet className="outlet" />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/events",
            element: <Event />,
          },
        ],
      },
    ],
    { basename: "/Ack-Church" }
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
