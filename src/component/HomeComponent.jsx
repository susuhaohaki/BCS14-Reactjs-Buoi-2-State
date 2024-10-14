import React, { useEffect, useState } from "react";

const HomeComponent = () => {
  const dataList = [
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
  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState({});
  const searchProduct = async () => {
    let productData = dataList.slice();
    productData = dataList.find((product) => product.id == productId);
    setProduct(productData);
  };
  useEffect(() => {
    searchProduct();
  }, [productId]);
  return (
    <div className="h-full w-full bg-[url('./src/assets/glassesImage/background.png')] bg-no-repeat bg-cover mx-auto">
      <div className="w-full py-4 bg-black/50 text-center text-white mb-16">
        <h1>TRY CLASS APP ONLINE</h1>
      </div>
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
                {product.name}
              </h1>
              <p className="mb-2">{product.desc}</p>
              <p>price: {product.price}</p>
            </div>
            <div className="absolute w-[54%] top-[121px] left-[88px]">
              <img src={`./src/assets${product.url}`} alt="" />
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
      <div
        className="container mx-auto pb-16
    "
      >
        <div className="bg-white">
          <div className="grid grid-cols-6 gap-4 px-4 py-8">
            {dataList.map((product, index) => (
              <div
                key={index}
                onClick={() => setProductId(product.id)}
                className={`border border-gray-400 cursor-pointer p-4 ${
                  productId === product.id ? "bg-orange-200" : ""
                }`}
              >
                <img
                  className="w-full h-full"
                  src={`./src/assets/glassesImage/v${product.id}.png`}
                  alt={product.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
