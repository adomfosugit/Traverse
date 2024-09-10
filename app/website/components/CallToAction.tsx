import { useState } from "react";
import Form from "./Form";

const CallToAction = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="lg:flex">
        <div className="w-screen lg:w-1/2 h-52 lg:h-72 bg-gray-800 bg-opacity-20 text-center">
          <p className="pt-16 text-xl lg:text-3xl lg:font-semibold text-white">
            Thinking about relocating to the Continent?
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="text-center bg-white w-32 h-10 rounded-md mt-10"
          >
            Learn more
          </button>
        </div>
        <div className="w-screen lg:w-1/2 h-52 lg:h-72 bg-black bg-opacity-60 text-center text-white">
          <p className="pt-16 text-xl lg:text-3xl lg:font-semibold">
            Thinking About Acquiring Real Estate in Africa?
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="text-center bg-white w-32 h-10 rounded-md mt-10 text-black"
          >
            Learn more
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <Form showModal={showModal} setShowModal={setShowModal} />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CallToAction;
