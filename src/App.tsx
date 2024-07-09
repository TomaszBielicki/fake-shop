import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import "../src/scss/app.scss";
import ErrorPage from "./pages/Error";
import AboutUsPage from "./pages/AboutUs";
import ContactPage from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductList /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
