import React from "react"

const NewSection = () => {
  return (
    <section className="News_Container">
      <div className="p-[100px] ">
        {/* display: flex; flex-direction: column; justify-content: center;
        align-items: center; */}
        <div className="h-[400px] bg-[#007FF4] rounded-[13px] flex flex-col justify-evenly items-center ">
          <div className="text-center flex m-[28px] flex-col">
            <h1 className="lg:text-[50px] text-[white]">
              Subscribe to Newsletter
            </h1>
            <p className="text-[white]">
              We have a wide experience in experience design and strategy,
            </p>
          </div>

          <div className="w-[70%]">
            <div className="p-[40px] bg-[white] w-[100%]  flex rounded-[10px]">
              <input
                type="text"
                className="w-[80%]"
                placeholder="Enter Your Email"
              />
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                send Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewSection
