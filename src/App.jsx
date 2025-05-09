import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from "react-router-dom";
import Login from './pages/auth/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/cart/Orders";
import Products from "./pages/services/Products";
import Contact from "./components/Contact";
import ChangePassword from "./pages/auth/ChangePassword";
import Cart from "./pages/cart/Cart";
import WhoAreWe from './components/WhoAreWe';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/quienes-somos" element={<WhoAreWe />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-Password" element={<ChangePassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Route>
    )
  );
  return (
    <div className="App flex flex-col min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}
export default App; 
const Root = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};