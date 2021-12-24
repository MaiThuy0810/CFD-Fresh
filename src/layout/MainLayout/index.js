import { React } from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { Link, Outlet } from "react-router-dom";
import CartModel from "../../components/CartModel/CartModel";
import { usePage } from "../../context/PageContext";
import BtnEmtyBack from "../../components/Button/BtnEmtyBack";

// export default MainLayout;
export const MainLayout = () => {
  const { isOpenCart } = usePage();
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <CartModel isOpen={isOpenCart} />
      <BtnEmtyBack
        onClick={() => console.log("edvsvwdv")}
        size="large"
        type="icon-right"
        colorborder="green"
      >
        Read recepies
      </BtnEmtyBack>
    </div>
  );
};
