import React from "react"
import Doctor from "../images/fullDoctorsvg.svg"
import Emergency from "../images/fullEmergencysvg.svg"
import Hours24 from "../images/full24Hourssvg.svg"
const Inovation = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="flex items-center justify-center p-[95px] ">
        {/**Innovative */}
        <div className="w-1/2 flex flex-col gap-[30px]">
          <div>
            <h1 className="text-[54px] text-[#003B79] font-[700]">
              Clinic With Innovative
            </h1>
          </div>
          <div className="">
            <p className="text-[#002348] text-[20px] font-[400] ">
              We provide the most full medical services, so every person could
              heave the oppurtunity to receive qualitative medical help.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Learn More
            </button>
          </div>
        </div>
        {/**Image */}
        <div className="w-1/2 grid grid-cols-2">
          <div>
            <img src={Doctor} alt="" />
          </div>
          <div>
            <img src={Emergency} alt="" className=" relative top-[146px]" />
          </div>
          <div>
            <img src={Hours24} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inovation
