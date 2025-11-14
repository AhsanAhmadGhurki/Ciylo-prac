import React from "react";
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
  return (
    <>
      <div className="p-x mt-[120px]">
        <div className="flex flex-col justify-between items-center mb-[64px]">
          <div className="absolute top-[-200px] right-[-200px] w-[800px] h-[600px] rounded-bl-[500px] bg-gradient-to-bl from-[#00c9a7]/70 to-transparent blur-[120px] opacity-90 pointer-events-none"></div>
          <div className="absolute top-[-150px] left-[-300px] w-[600px] h-[550px] rounded-bl-[500px] bg-gradient-to-bl from-[#00c9a7]/50 to-transparent blur-[120px] opacity-90 pointer-events-none"></div>
          <div className="text-center mb-6">
            <div className="text-[64px] leading-[62px] font-bold mb-4">
              Build Your <br />
              Digital Future With Us
            </div>
            <div className="text-lg text-gray-800">
              Give customers a structutal experience they'll and come back.{" "}
              <br />
              Join #1 app to track your data.
            </div>
          </div>
          <div className="w-full h-[70vh]">
            <img src="/images/home.png" className="w-full h-full object-contain" alt="home" />
          </div>
        </div>
        <div className="m-y">
          <div className="text-center text-lg mb-7">
            Join <span className="font-bold">2,5K+</span> software businesses
            growing with Colabrio.
          </div>
          <div>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={6}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              speed={800}
              className="w-full"
            >
              <SwiperSlide>
                <img
                  src="/images/tinder.png"
                  className="w-full h-[100px] object-contain"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/tinder.png"
                  className="w-full h-[100px] object-contain"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/tinder.png"
                  className="w-full h-[100px] object-contain"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/tinder.png"
                  className="w-full h-[100px] object-contain"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src="/images/tinder.png"
                  className="w-full h-[100px] object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/tinder.png"
                  className="w-full h-[100px] object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/tinder.png"
                  className="w-full h-[100px] object-contain"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="img-container w-[60%] h-[100vh] rounded-custom overflow-hidden">
              <img
                src="/images/laptop.png"
                className="w-full h-full object-cover"
                alt="tinder"
              />
            </div>
            <div className="w-[40%]">
              <div className="text-lg font-medium">web development</div>
              <div className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
