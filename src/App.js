import React from "react";
// import HomePage from "./pages/HomePage/home";
import { MainLayout } from "./layout/MainLayout";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
  Link,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage/home";
import Category from "./pages/Category/Category";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import { PageProvider } from "./context/PageContext";

function App() {
  return (
    // <>
    //   {" "}
    //   <HomePage />
    // </>

    <BrowserRouter>
      <PageProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Route>
        </Routes>
      </PageProvider>
    </BrowserRouter>
  );
}

export default App;
