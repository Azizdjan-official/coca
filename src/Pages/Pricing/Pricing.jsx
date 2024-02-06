import React from "react";
import "./pricing.css";
const Pricing = () => {
  return (
    <div>
      <div>
        <div className="grid justify-center py-28">
          <div className="rounded-full w-32 p-1 text-center bg-blue-500">
            <p>Pricing Plans 🤑</p>
          </div>
        </div>

        <div className="text-center">
          <h1 className=" w-[40%] mx-auto font-medium  text-5xl">
            Choose a plan for a more advanced business
          </h1>
          <p className="py-28 ">Annual pricing (save 20%)</p>
        </div>
        
        <div className="flex justify-between">
          <div className="showcase-img"></div>
          <div className="showcase-img-2"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Pricing;
