// import React from "react";
// import CustomerSay from "./CustomerSay";
// import "./CustomerSayWrap.scss";
// import { IconArrowRight } from "../Icons/icon";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// function CustomerSayWrap() {
//   const listQuote = [
//     {
//       id: 1,
//       quote:
//         "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
//       nameCus: "About Us",
//     },
//     {
//       id: 2,
//       quote:
//         "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
//       nameCus: "About Us",
//     },
//     {
//       id: 3,
//       quote:
//         "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
//       nameCus: "About Us",
//     },
//     {
//       id: 4,
//       quote:
//         "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
//       nameCus: "About Us",
//     },
//   ];
//   let callQuote = listQuote.map((item, index) => {
//     return <CustomerSay quote={item.quote} nameCus={item.nameCus} />;
//   });
//   return (
//     <div className="CustomerSayWrap">
//       <div className="container">
//         <div className="title">
//           <h3>Our cusstomer say</h3>
//           <div className="gotoBog">
//             <h3>Go to blog</h3>
//             <IconArrowRight />
//           </div>
//         </div>
//       </div>

//       <div className="wrapquote"> {callQuote}</div>
//     </div>
//   );
// }

// export default CustomerSayWrap;

import React from "react";
import CustomerSay from "./CustomerSay";
import "./CustomerSayWrap.scss";
import { IconArrowRight } from "../Icons/icon";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function CustomerSayWrap() {
  const listQuote = [
    {
      id: 1,
      quote:
        "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
      nameCus: "About Us",
    },
    {
      id: 2,
      quote:
        "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
      nameCus: "About Us",
    },
    {
      id: 3,
      quote:
        "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
      nameCus: "About Us",
    },
    {
      id: 4,
      quote:
        "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
      nameCus: "About Us",
    },
  ];
  const renderSlides = () =>
    listQuote.map((item, index) => {
      return <CustomerSay quote={item.quote} nameCus={item.nameCus} />;
    });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    speed: 500,
  };

  return (
    <div className="CustomerSayWrap">
      <div className="container">
        <h3>Our cusstomer say</h3>

        <div className="gotoBog">
          <h3>Button</h3>
          <IconArrowRight />
        </div>
      </div>

      <div className="wrapquote">
        <Slider {...settings}>{renderSlides()}</Slider>
      </div>
    </div>
  );
}
// import React from "react";
// import "keen-slider/keen-slider.min.css";
// import { useKeenSlider } from "keen-slider/react";
// import CustomerSay from "./CustomerSay";

// export default function CustomerSayWrap() {
//   const [refCallback, slider, sliderNode] = useKeenSlider(
//     {
//       rtl: true,
//       slideChanged() {
//         console.log("slide changed");
//       },
//     },
//     [
//       // add plugins here
//     ]
//   );
//   const listQuote = [
//     {
//       id: 1,
//       quote:
//         "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
//       nameCus: "About Us",
//     },
//     {
//       id: 2,
//       quote:
//         "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
//       nameCus: "About Us",
//     },
//     {
//       id: 3,
//       quote:
//         "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
//       nameCus: "About Us",
//     },
//     {
//       id: 4,
//       quote:
//         "“ This is an super space for your customers qoute.Don’t worry it works smooth as pie.You will get all what you need by writiing a text here “",
//       nameCus: "About Us",
//     },
//   ];
//   let callQuote = listQuote.map((item, index) => {
//     return <CustomerSay quote={item.quote} nameCus={item.nameCus} />;
//   });
//   return (
//     <div ref={refCallback} className="keen-slider">
//       <div class="keen-slider__slide">{callQuote}</div>
//       <div class="keen-slider__slide">{callQuote}</div>
//       {/* <div class="keen-slider__slide">{callQuote}</div> */}
//       {/* <div class="keen-slider__slide">2</div>
//       <div class="keen-slider__slide">3</div> */}
//     </div>
//   );
// }
