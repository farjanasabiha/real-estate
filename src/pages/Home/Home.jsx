import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div className="">
      <Swiper
        style={{
          "--swiper-navigation-color": "#4885f8",
          "--swiper-pagination-color": "#4885f8",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper "
      >
        <div
          slot="container-start"
          className="parallax-bg "
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide
          style={{
            "background-image":
              "url(https://i.ibb.co/qpX9Ppb/d12c6263e676cbf3a68a14e48c9e5d1a.jpg)",
            "background-repet": "no-repet",
            "background-size": "cover",
            "background-position": "center",
          }}
        >
          <div className="container mx-auto">
            <div className="title" data-swiper-parallax="-400">
              ALL YOU NEED TO CREATE
            </div>
            <div className="subtitle" data-swiper-parallax="-300">
              <span className="font-black text-[#4885f8]">Residential</span>{" "}
              <br></br> Real Estate Website
            </div>
            <div className="text mt-3" data-swiper-parallax="-200">
              <p>
                With a robust selection of popular properties on hand, as well
                as leading properties from real estate experts.
              </p>
            </div>
            <div className="button" data-swiper-parallax="-100">
              <div className="mt-10">
                <a className="btn px-10 bg-[#4b85f0] text-white font-semibold text-base">
                  Login
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            "background-image": "url(https://i.ibb.co/hdMCHnF/w620x413.jpg)",
            "background-repet": "no-repet",
            "background-size": "cover",
            "background-position": "center",
          }}
        >
          <div className="container mx-auto">
            <div className="title" data-swiper-parallax="-400">
              ALL YOU NEED TO CREATE
            </div>
            <div className="subtitle" data-swiper-parallax="-300">
              <span className="font-black text-[#4885f8]">Residential</span>{" "}
              <br></br> Real Estate Website
            </div>
            <div className="text mt-3" data-swiper-parallax="-200">
              <p>
                With a robust selection of popular properties on hand, as well
                as leading properties from real estate experts.
              </p>
            </div>
            <div className="button" data-swiper-parallax="-100">
              <div className="mt-10">
                <a className="btn px-10 bg-[#4b85f0] text-white font-semibold text-base">
                  Login
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            "background-image": "url(https://i.ibb.co/2t187GX/10250925-1.jpg)",
            "background-repet": "no-repet",
            "background-size": "cover",
            "background-position": "center",
          }}
        >
          <div className="container mx-auto">
            <div className="title" data-swiper-parallax="-400">
              ALL YOU NEED TO CREATE
            </div>
            <div className="subtitle" data-swiper-parallax="-300">
              <span className="font-black text-[#4885f8]">Residential</span>{" "}
              <br></br> Real Estate Website
            </div>
            <div className="text mt-3" data-swiper-parallax="-200">
              <p>
                With a robust selection of popular properties on hand, as well
                as leading properties from real estate experts.
              </p>
            </div>
            <div className="button" data-swiper-parallax="-100">
              <div className="mt-10">
                <a className="btn px-10 bg-[#4b85f0] text-white font-semibold text-base">
                  Login
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
