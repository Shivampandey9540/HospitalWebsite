import React from "react"
import img from "../images/Rectangle.svg"

const BestSpeciliest = () => {
  return (
    <section className="Speciliest_Container bg-[#F8FDFF] h-full">
      <div className="flex flex-wrap w-full mb-20 flex-col items-center justify-around">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 text-center">
          <h1 className="sm:text-3xl md:text-[30px]  font-[600] title-font mb-2 text-[#003B79]">
            We Have The Best Specialist
          </h1>
        </div>
        <p className="lg:w-1/2 md:w-[30%] w-full leading-relaxed font-[400] md:text-[20px] text-[#002348] text-center  ">
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </p>
      </div>

      <div className="lg:flex justify-center items-center gap-[30px] p-[30px] wrap sm:grid sm:grid-col-2  ">
        <div className="max-w-sm bg-white rounded-[22px]  shadow-md m-[50px] ">
          <a href="#">
            <img className="rounded-t-lg" src={img} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 xl:text-2xl font-bold tracking-tight text-[#000000] lg:text-[15px] ">
                Dr. Awaatif Al
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Dental Care
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-[22px]  shadow-md  m-[50px] ">
          <a href="#">
            <img className="rounded-t-lg" src={img} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 xl:text-2xl font-bold tracking-tight text-[#000000] lg:text-[15px] ">
                Dr. Filipa Gaspar
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Cardiology
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-[22px]  shadow-md  m-[50px] ">
          <a href="#">
            <img className="rounded-t-lg" src={img} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 xl:text-2xl font-bold tracking-tight text-[#000000] lg:text-[15px] ">
                Dr. Sukhmeet Gorae
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Neurological
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-[22px]  shadow-md  m-[50px] ">
          <a href="#">
            <img className="rounded-t-lg" src={img} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 xl:text-2xl font-bold tracking-tight text-[#000000]   lg:text-[15px]">
                Dr. Siri Jakobsson
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Prediatrics
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSpeciliest
