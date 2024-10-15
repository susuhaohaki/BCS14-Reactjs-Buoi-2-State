import React, { useEffect, useState } from "react";
import GlassList from "./GlassList";
import GlassSample from "./GlassSample";

const HomeComponent = () => {
  const arrayData = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "/glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "/glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "/glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "/glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "/glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "/glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "/glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];
  const [glassObj, setGlassObj] = useState(arrayData[0]);
  const showDetail = (newGlassObj) => {
    setGlassObj(newGlassObj);
  };
  return (
    <div className="h-full w-full bg-[url('./src/assets/glassesImage/background.png')] bg-no-repeat bg-cover mx-auto">
      <div className="w-full py-4 bg-black/50 text-center text-white mb-16">
        <h1>TRY CLASS APP ONLINE</h1>
      </div>
      <GlassSample glassObj={glassObj} />
      <GlassList
        arrayData={arrayData}
        showDetail={showDetail}
        glassObj={glassObj}
      />
    </div>
  );
};

export default HomeComponent;
