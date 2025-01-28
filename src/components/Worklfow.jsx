import { CheckCircle2 } from "lucide-react";

import bitcoin from "../assets/pic1.png";
import { checklistItems } from "../constants";
const Worklfow = () => {
  return (
    <div className="mt-20" id="Workflow">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
       
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Features
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={bitcoin} alt="" className="pt-12 pb-12 h-full" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => {
            return (
              <div className="flex mb-12" key={index}>
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div className="">
                  <h5 className="mt-1 mb-2 text-xl">{item.title} </h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Worklfow;
