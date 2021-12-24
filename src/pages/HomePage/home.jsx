import React from "react";
import BtnEmtyBack from "../../components/Button/BtnEmtyBack";
import CustomerSayWrap from "../../components/CustomerSay/CustomerSayWrap";
import { IconLeftBl } from "../../components/Icons/icon";
import WrapProduct from "../../components/WrapProduct/wrapproduct";
import Banner from "./components/banner";
import BestFarmer from "./components/bestfarmer";
// import BtnMore from "../../components/Button/MoreCategory/morecategory"
import WrapBestProduct from "./components/wrapbestproduct";
import WrapOurBlog from "./components/WrapOurBlog";
import "./homepage.scss";

function HomePage() {
  // const listBanner = [
  //   { id: 1, nameBanner: "red", titleBanner: "red color" },
  //   { id: 2, nameBanner: "blue", titleBanner: "blue color" },
  // ];
  // let banerPro = listBanner.map((item, index) => {
  //   return (
  //     <Banner nameBanner={item.nameBanner} titleBanner={item.titleBanner} />
  //   );
  // });

  return (
    <div className="homepage">
      {/* <Header /> */}
      <div className="container">
        {" "}
        <div className="category">
          {" "}
          <div className="category__menu">
            <WrapProduct
              titleProduct="category menu"
              itemProduct1="Bakery"
              itemProduct2="Fruit and vegetables"
              itemProduct3="Meat and fish"
              itemProduct4="Drinks"
              itemProduct5="Kitchen"
              // tagname="180"
              heighTag="small"
              display="none"
            />
            <BtnEmtyBack
              size="large"
              type="icon-right"
              icon={<IconLeftBl />}
              colorborder="default"
              color="gray"
            >
              Read recepies
            </BtnEmtyBack>
          </div>{" "}
          {/* <div className="category__banner">{banerPro}</div> */}
          <Banner nameBanner="red" titleBanner="abc" />
          <Banner nameBanner="red" titleBanner="abc" />
        </div>
        <div className="saleproduct">
          <WrapBestProduct />
        </div>
        <div className="farmarproduct">
          <BestFarmer />
        </div>
      </div>

      <div className="customersay">
        <CustomerSayWrap />
      </div>
      <div className="container">
        <WrapOurBlog />
      </div>
      <div className="ourblog"></div>

      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
