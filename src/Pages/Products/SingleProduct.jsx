import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { actionType } from "../../Context/reducer";

const SingleProduct = ({ setpack }) => {
  const [{ pack }, dispatch] = useStateValue();

  const pack1 = {
    period: "1 Month",
    price: 499,
    bottle: 1,
    tablets: 60,
  };

  const pack2 = {
    period: "2 Month",
    price: 849,
    bottle: 2,
    tablets: 120,
  };

  const pack3 = {
    period: "4 Month",
    price: 1299,
    bottle: 4,
    tablets: 240,
  };

  useEffect(() => {
    dispatch({
      type: actionType.SET_PACK,
      pack: pack2,
    });
  }, []);

  // This will afterwards come from DB

  const [pack1css, setPack1css] = useState("");
  const [pack2css, setPack2css] = useState("border border-red-600");
  const [pack3css, setPack3css] = useState("");

  const setBorder = (p) => {
    switch (p) {
      case 1:
        setPack1css("border border-red-600");
        setPack2css("");
        setPack3css("");
        dispatch({
            type: actionType.SET_PACK,
            pack: pack1,
          });
        break;
      case 2:
        setPack1css("");
        setPack2css("border border-red-600");
        setPack3css("");
        dispatch({
            type: actionType.SET_PACK,
            pack: pack2,
          });
        break;
      case 3:
        setPack1css("");
        setPack2css("");
        setPack3css("border border-red-600");
        dispatch({
            type: actionType.SET_PACK,
            pack: pack3,
          });
        break;
    }
  };

  return (
    <div
      id="SingleProduct"
      className="md:my-20 flex flex-wrap lg:flex-nowrap items-start justify-evenly"
    >
      <div className="flex flex-col mx-10 mb-3">
        <img src="p.png" alt="" />
        <div className="flex items-center space-x-8 md:mt-10">
          <img className="w-20 hidden md:block" src="p.png" alt="" />
          <img className="w-20 hidden md:block" src="p.png" alt="" />
          <img className="w-20 hidden md:block" src="p.png" alt="" />
          <img className="w-20 hidden md:block" src="p.png" alt="" />
        </div>
      </div>

      <div className="md:mt-0 m-4">
        <h2 className="font-bold md:max-w-3xl text-2xl sm:text-4xl mb-4">
          YOSHA PCOS PCOD tablets | Delayed Periods | Ayurvedic Ingredients
        </h2>
        <div className="flex items-center space-x-1">
          <i className="text-yellow-400 fa-solid fa-star"></i>
          <i className="text-yellow-400 fa-solid fa-star"></i>
          <i className="text-yellow-400 fa-solid fa-star"></i>
          <i className="text-yellow-400 fa-solid fa-star"></i>
          <i className="text-yellow-400 fa-solid fa-star"></i>
          <p className="ml-8">
            4.8<span className="tracking-light font-light"> | </span>12 reviews
          </p>
        </div>
        <div className="my-5">
          <p className="font-normaltext-xl">
            For Delayed and Irregular Periods due to PCOS PCOD
          </p>
          <p className="text-sm text-red-500 font-normal">Read more</p>
        </div>
        <div className="ml-8 flex justify-center md:justify-start">
          <ul className="list-disc">
            <li className="font-normal text-lg">
              Improves hormone balance (LH and FSH)
            </li>
            <li className="font-normal text-lg">
              Makes period regular (Rebuilds Endometrial Layer)
            </li>
            <li className="font-normal text-lg">
              Helps in flushing out harmful toxins on a daily basis
            </li>
            <li className="font-normal text-lg">
              Scrapes out deep cell level toxins from the reproductive system
            </li>
            <li className="font-normal text-lg">
              Improves digestion and metabolism
            </li>
            <li className="font-normal text-lg">Reduces bloating</li>
            <li className="font-normal text-lg">
              Helps in preventing lifestyle disorders in future
            </li>
          </ul>
        </div>

        <div className="md:flex">
          <div className="flex flex-col my-10 items-center">
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-around items-center">
              
              <div>
                <button onClick={() => setBorder(1)} className="">
                  <div
                    className={`text-left rounded-lg p-3 m-1 w-28 sm:w-40 ${pack1css}`}
                    style={{ background: "#F4F4F4" }}
                  >
                    <div className="sm:flex justify-between">
                      <div className="font-semibold text-xs tracking-tight">
                        1 MONTH
                      </div>
                      <div className="font-bold text-sm">Rs. 499</div>
                    </div>
                    <hr className="bg-slate-400"></hr>
                    <div className="font-normal text-xs my-3 tracking-tight">
                      1 bottle
                    </div>
                    <div className="font-normal text-xs my-3 tracking-tight">
                      60 tablets
                    </div>
                    <div className="font-normal text-xs mt-3 tracking-tight">
                      Expiry: 3 years
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex flex-col items-center sm:mx-3">
                <div className="text-center text-xs bg-red-400 text-white absolute rounded-t-md px-1 sm:px-3 -mt-3">
                  Recommended
                </div>
                <button onClick={() => setBorder(2)}>
                  <div
                    className={`text-left rounded-lg p-3 m-1 w-28 sm:w-40 ${pack2css}`}
                    style={{ background: "#F4F4F4" }}
                  >
                    <div className="sm:flex justify-between">
                      <div className="font-semibold text-xs tracking-tight">
                        2 MONTH
                      </div>
                      <div className="font-bold text-sm">Rs. 849</div>
                    </div>
                    <hr className="bg-slate-400"></hr>
                    <div className="font-normal text-xs my-3 tracking-tight">
                      2 bottle
                    </div>
                    <div className="font-normal text-xs my-3 tracking-tight">
                      120 tablets
                    </div>
                    <div className="font-normal text-xs mt-3 tracking-tight">
                      Expiry: 3 years
                    </div>
                  </div>
                </button>
              </div>

              <div>
                <button onClick={() => setBorder(3)} className="">
                  <div
                    className={`text-left rounded-lg p-3 m-1 w-28 sm:w-40 ${pack3css}`}
                    style={{ background: "#F4F4F4" }}
                  >
                    <div className="sm:flex justify-between">
                      <div className="font-semibold text-xs tracking-tight">
                        4 MONTH
                      </div>
                      <div className="font-bold text-sm">Rs. 1299</div>
                    </div>
                    <hr className="bg-slate-400"></hr>
                    <div className="font-normal text-xs my-3 tracking-tight">
                      4 bottles
                    </div>
                    <div className="font-normal text-xs my-3 tracking-tight">
                      240 tablets
                    </div>
                    <div className="font-normal text-xs mt-3 tracking-tight">
                      Expiry: 3 years
                    </div>
                  </div>
                </button>
              </div>
              
            </div>

            <div className="m-8 flex items-center">
              <Link
                to="/form"
                className="text-xl py-4 px-16 bg-[#4B1785] border rounded-md font-bold text-white"
              >
                BUY NOW
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="text-sm text-red-500">
                    <p>Iconize this section</p>
                    <p>free shipping</p>
                    <p>cash on delivery</p>
                    <p>secured payment</p>
                </div> */}
      </div>
    </div>
  );
};

export default SingleProduct;
