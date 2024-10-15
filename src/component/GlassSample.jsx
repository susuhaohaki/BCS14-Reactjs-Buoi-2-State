import React from "react";

const GlassSample = (props) => {
  let { glassObj } = props;
  return (
    <>
      <div className="container mx-auto mb-16">
        <div className="flex justify-around w-full">
          <div className="max-w-sm border border-gray-200 relative ">
            <img
              className="w-full h-full object-cover"
              src="./src/assets/glassesImage/model.jpg"
              alt=""
            />
            <div className="absolute w-full bottom-0 left-0 bg-orange-600/30 text-white p-2">
              <h1 className="text-lg font-bold text-blue-700 mb-2">
                {glassObj.name}
              </h1>
              <p className="mb-2">{glassObj.desc}</p>
              <p>price: {glassObj.price}</p>
            </div>
            <div className="absolute w-[54%] top-[121px] left-[88px]">
              <img src={`./src/assets${glassObj.url}`} alt="" />
            </div>
          </div>
          <div className="max-w-sm border border-gray-200 rounded-lg relative">
            <img
              className="w-full h-full "
              src="./src/assets/glassesImage/model.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GlassSample;
