// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from "react-router-dom";
import BlogCards from "../../Components/BlogCards/BlogCards";

const Home = () => {

  const blogs = useLoaderData();
  return (
    <div>
      {/* Swiper Slider Here */}
      <div>
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
              backgroundImage:
                "url(https://i.ibb.co/qpX9Ppb/d12c6263e676cbf3a68a14e48c9e5d1a.jpg)",
              backgroundRepeat: "no-repet",
              backgroundSize: "cover",
              backgroundPosition: "center",
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
              backgroundImage: "url(https://i.ibb.co/hdMCHnF/w620x413.jpg)",
              backgroundRepeat: "no-repet",
              backgroundSize: "cover",
              backgroundPosition: "center",
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
              backgroundImage: "url(https://i.ibb.co/2t187GX/10250925-1.jpg)",
              backgroundRepeat: "no-repet",
              backgroundSize: "cover",
              backgroundPosition: "center",
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
      {/* Estate Section  */}
      <div>
        <section className="py-6 sm:py-12 bg-white text-white">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-bold text-black mb-5">
                Lets Book your Property
              </h2>
              <p className="font-serif text-sm text-gray-700">
                Renting a property involves leasing a residential or commercial
                space from a landlord for a specified period.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {blogs.map((blog, index) => (
                <BlogCards blog={blog} key={index}></BlogCards>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
