import React from "react"
import img from "../images/Rectangle.svg"

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <span className="text-[24px] text-[#002348]  font-bold">
            Welcome to MediCare+ Clinic
          </span>

          <br className="hidden lg:inline-block" />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[64px] text-[#003B79]">
            {" "}
            Best Specialists
          </h1>
          <p className="mb-8 leading-relaxed w-[50%]">
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </p>
          <div className="flex justify-center items-center">
            <button className="inline-flex text-white bg-indigo-500  border-0 py-2 px-6 focus:outline-none hover:bg-[#007FF4] rounded-3xl  text-lg">
              Make an Appointment
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Departments
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={img}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
