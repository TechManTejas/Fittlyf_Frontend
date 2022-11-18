import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { sendOrderPage3Data } from "../../APIs/OrdersAPI";
import { useEffect } from "react";
import { useStateValue } from "../../Context/StateProvider";

const C1 = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [{ id, page1Data, page2Data }] = useStateValue();
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const shipping = useRef();

  const orderPage3data = async () => {
    setloader(true);
    const data = {
      shippingSame: shipping.current.checked,
      id: id,
    };

    let response = await sendOrderPage3Data(data);

    console.log(response);

    if (response.data.code === "success") {
      navigate("/");
    }
  };

  return (
    <div className="flex justify-end box:w-[54vw]">
      <div className="w-screen sm:max-w-[45rem]">
        <div className="h-screen mx-4 md:mx-14 flex flex-col  justify-between">
          <div>
            <div>
              <h1 className="font-normal text-3xl mb-4 mt-3 box:mt-16">
                fittlyf
              </h1>

              <div className="flex flex-col box:hidden bg-gray-100">
                <div className="flex justify-between items-center py-4 px-2">
                  <button
                    onClick={() => {
                      setShowSummary(!showSummary);
                    }}
                  >
                    <div className="text-red-500 text-sm">
                      <i className="fa-solid fa-cart-shopping mr-2"></i>Show
                      order summary
                      <i className="ml-2 fa-solid fa-chevron-down"></i>
                    </div>
                  </button>
                  <div>
                    <span className="font-semibold text-lg">₹499.00</span>
                  </div>
                </div>

                {showSummary && (
                  <div>
                    <hr className="bg-gray-300" />
                    <div className="p-2">
                      <div className="flex text-sm space-x-3 justify-between items-center my-5">
                        <img
                          className="w-20"
                          src="https://cdn.shopify.com/s/files/1/0618/6765/5415/products/1_small.png?v=1654409191"
                          alt=""
                        />
                        <div className="flex xl:w-96 flex-col">
                          <h4 className="font-semibold">
                            YOSHA PCOS PCOD tablets | Delayed Periods |
                            Ayurvedic
                          </h4>
                          <p className="my-2">
                            1 Month ₹ 499 1 bottle 60 tablets
                          </p>
                        </div>
                        <span className="font-semibold">₹499.00</span>
                      </div>

                      <hr className="bg-gray-300" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="my-5">Subtotal</h5>
                          <h5 className="my-5">Shipping</h5>
                        </div>
                        <div className="text-right">
                          <h5 className="font-semibold my-4">₹499.00</h5>
                          <h5 className="font-semibold my-4">Free</h5>
                        </div>
                      </div>

                      <hr className="bg-gray-300" />

                      <div className="flex items-center justify-between my-5">
                        <div>
                          <div className="font-semibold">Total</div>
                          <div className="text-xs">
                            Including ₹76.12 in taxes
                          </div>
                        </div>
                        <div>
                          <span className="text-sm">INR</span>
                          <span className="font-semibold text-2xl">
                            ₹499.00
                          </span>
                        </div>
                      </div>
                    </div>
                    <hr className="bg-gray-300" />
                  </div>
                )}
              </div>

              <p className="text-sm my-5">
                <span className="text-red-500">Cart</span> &gt;{" "}
                <span className="text-red-500">Information</span> &gt;{" "}
                <span className="text-gray-500">Payment</span> &gt;{" "}
                <span className="text-gray-500">Shipping</span>
              </p>
            </div>

            <div className="text-sm border rounded-md ">
              <p className="flex items-center px-5 py-3 justify-between">
                <span className="flex xl:flex-row flex-col text-gray-500 ">
                  Contact
                  <span className="text-black xl:pl-6">{page1Data.emailPhoneNumber}</span>{" "}
                </span>
                <span className="text-sm text-red-500 pl-2"><Link to="/form">Change</Link></span>
              </p>
              {/* <p className="flex flex-wrap items-center px-5 py-3 justify-between">
                                <span className="text-gray-500">Contact <span className="text-black pl-6">myemail@gmail.com</span> </span>
                                <span className="text-sm text-red-500 pl-2">Change</span>
                            </p> */}
              <hr />
              <p className="flex items-center px-5 py-3 justify-between">
                <span className="flex xl:flex-row flex-col text-gray-500 ">
                  Ship to
                  <span className="text-black xl:pl-6">{`${page1Data.city}, ${page1Data.state}, India`}</span>{" "}
                </span>
                <span className="text-sm text-red-500 pl-2"><Link to="/form">Change</Link></span>
              </p>
              {/* <p className="flex flex-wrap items-center px-5 py-3 justify-between">
                                <span className="text-gray-500">Ship to <span className="text-black pl-6">address, MH, India</span> </span>
                                <span className="text-sm text-red-500 pl-2">Change</span>
                            </p> */}
              <hr />
              <p className="flex items-center px-5 py-3 justify-between">
                <span className="flex xl:flex-row flex-col text-gray-500 ">
                  Method
                  <span className="text-black xl:pl-6">
                    {page2Data.mode ? "Cash on Delivery - Shipping Charges · Free" : "Prepaid - Free Shipping" }      
                  </span>{" "}
                </span>
                <span className="text-sm text-red-500 pl-2"><Link to="/payment">Change</Link></span>
              </p>
            </div>

            <div>
              <h1 className="text-lg mt-8">Payment</h1>
              <p className="text-gray-500 text-sm my-3">
                All transactions are secure and encrypted.
              </p>
              <div className="border text-sm rounded-md">
                <div className=" px-5 py-5">
                {page2Data.mode ? "Cash on Delivery - Shipping Charges · Free" : "Prepaid - Free Shipping" }      
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-lg mt-8">Billing address</h1>
              <p className="text-gray-500 text-sm my-2">
                Select the address that matches your card or payment method.
              </p>
              <div className="border text-sm rounded-md">
                <div className="flex flex-wrap items-center px-5 py-5 justify-start">
                  <input ref={shipping} type="radio" name="method" id="" />
                  <p className="pl-4">Same as shipping address</p>
                </div>
                <hr />
                <div className="flex items-center px-5 py-5 justify-start">
                  <input type="radio" name="method" id="" />
                  <p className="pl-4">Use a different billing address</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex flex-col-reverse sm:flex-row sm:flex mb-10 sm:justify-between sm:items-center">
                <div className=" sm:my-0 flex justify-center">
                  <button className="text-sm text-red-500">
                    <Link to="/payment">&lt; Return to Billing</Link>
                  </button>
                </div>

                <div className="mb-5 sm:my-0">
                  <button className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full">
                    {loader ? (
                      <>
                        <div>Loading...</div>
                      </>
                    ) : (
                      <div onClick={() => orderPage3data()}>Complete Order</div>
                    )}
                  </button>
                </div>
                {/* <div className="flex mb-10 items-center justify-between">
                                <Link to="/shipping" className="text-sm text-red-500">&lt; Return to cart</Link>
                                <Link
                                    to="/payment"
                                    //   onClick={() => orderPage1Data()} 
                                    className="text-sm text-white bg-red-500 rounded-md py-5 px-4">
                                    Continue to Payment
                                </Link>
                            </div> */}
              </div>
            </div>
          </div>

          <div>
            <hr className="bg-gray-300" />

            <div className="text-gray-500 my-4 text-xs">
              All Rights Reserved fittlyf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const C2 = ({ pack }) => {
  return (
    <div className="bg-gray-50">
      <div className="h-screen w-[46vw]">
        <div className="p-12 max-w-[510px]">
          <div className="flex text-sm space-x-3 justify-center items-center my-5">
            <img
              className="w-20"
              src="https://cdn.shopify.com/s/files/1/0618/6765/5415/products/1_small.png?v=1654409191"
              alt=""
            />
            <div className="flex xl:w-96 flex-col">
              <h4 className="font-semibold">
                YOSHA PCOS PCOD tablets | Delayed Periods | Ayurvedic
              </h4>
              <p>{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p>
            </div>
            <span className="font-semibold">{`₹${pack.price}`}</span>
          </div>

          <hr className="bg-gray-300" />

          <div className="flex items-center justify-between">
            <div>
              <h5 className="my-5">Subtotal</h5>
              <h5 className="my-5">Shipping</h5>
            </div>
            <div className="text-right">
              <h5 className="font-semibold my-4">{`₹${pack.price}`}</h5>
              <h5 className="font-semibold my-4">Free</h5>
            </div>
          </div>

          <hr className="bg-gray-300" />

          <div className="flex items-center justify-between my-5">
            <div>
              <div className="font-semibold">Total</div>
              <div className="text-xs">Including ₹76.12 in taxes</div>
            </div>
            <div>
              <span className="text-sm">INR</span>
              <span className="font-semibold text-2xl">{`₹${pack.price}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Payment = () => {
  const [{ pack }, dispatch] = useStateValue();

  const navigate = useNavigate();

  useEffect(() => {
    if (!pack) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div id="Form" className="flex items-center justify-center">
        <C1 />

        <div className="border-r h-screen hidden box:block bg-gray-300"></div>

        <div className="hidden box:block">
          <C2 pack={pack} />
        </div>
      </div>
    </>
  );
};

export default Payment;
