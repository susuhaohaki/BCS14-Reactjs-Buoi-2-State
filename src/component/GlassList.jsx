import React from "react";

const GlassList = (props) => {
  let { arrayData, showDetail, glassObj } = props;
  return (
    <>
      <div
        className="container mx-auto pb-16
    "
      >
        <div className="bg-white">
          <div className="grid grid-cols-6 gap-4 px-4 py-8">
            {arrayData.map((glass, index) => (
              <div
                key={index}
                onClick={() => showDetail(glass)}
                className={`border border-gray-400 cursor-pointer p-4 ${
                  glassObj.id === glass.id ? "bg-orange-200" : ""
                }`}
              >
                <img
                  className="w-full h-full"
                  src={`./src/assets/glassesImage/v${glass.id}.png`}
                  alt={glass.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GlassList;
