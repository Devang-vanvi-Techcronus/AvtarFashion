import "./App.css";
import Login from "./Authentication/Login";
import Signup from "./Authentication/SignUp";
import ForgetPwd from "./Authentication/ForgetPwd";
import ResetPwd from "./Authentication/ResetPwd";
import Navigationbar from "./components/Navigationbar";
import { Routes, Router, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Page404 from "./components/Page404";
import Event from "./components/Event";
import SignUp from "./Authentication/SignUp";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Services from "./components/Services";
import RequiredAuth from "./components/RequiredAuth";
import Logout from "./Authentication/Logout";
import Product from "./components/product";
import Profile from "./components/Profile";
import LayoutNoFooter from "./components/LayoutNoFooter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactUs" element={<ContactUs />} />

          <Route path="/products/:id" element={<Product />} />

          <Route element={<RequiredAuth />}>
            <Route path="/events" element={<Event />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpwd" element={<ForgetPwd />} />
          <Route path="/password" element={<ResetPwd />} /> */}
        </Route>
        <Route path="/" element={<LayoutNoFooter />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpwd" element={<ForgetPwd />} />
          <Route path="/password" element={<ResetPwd />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
