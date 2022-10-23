import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { FreeMode, Pagination } from "swiper"
import Axios from "axios"
// import { Pagination } from "swiper"
const Testomone = () => {
  const [dataGET, setData] = useState([])
  const fetchdata = async () => {
    const data = await Axios.get(
      "https://admin.tomedes.com/api/v1/get-reviews?page=1"
    )

    console.log(data)
    if (data.status === 200) {
      setData(data.data.data)
    }
  }
  useEffect(() => {
    fetchdata()
  }, [])
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
          What Our Customers Say
        </h1>
        <div className="flex flex-wrap -m-4  justify-between">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            // effect="fade"
            className="mySwiper"
          >
            {dataGET.map(Teste => {
              return (
                <SwiperSlide key={Teste.ID}>
                  <div className="p-4 md:w-[100%] w-full h-[70%]">
                    <div className="h-full bg-gray-100 p-8   min-h-[440px] rounded-[17px] testomone-bg-shadow flex flex-col justify-center">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg> */}
                      <p className="leading-relaxed mb-6 xl:text-[13px]  sm:text-[9px] ">
                        {Teste.Reviews}
                      </p>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="https://dummyimage.com/107x107"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900">
                            {Teste.Name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {Teste.Company}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          {/* <div className="p-4 md:w-[42%]  w-full ">
            <div className="h-full bg-gray-100 p-8 rounded-[17px] testomone-bg-shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 text-gray-400 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">
                I wanted to thanks everyone at this facility for the quality of
                care and compassion they showed during my stay.
              </p>
              <a className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="https://dummyimage.com/107x107"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Patrícia Ribeiro
                  </span>
                  <span className="text-gray-500 text-sm">Patient</span>
                </span>
              </a>
            </div>
          </div> */}
          {/* <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </section>
  )
}

export default Testomone
