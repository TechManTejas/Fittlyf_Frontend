import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { sendOrderPage3Data } from "../../APIs/OrdersAPI";
import { useEffect } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { backendbaseuri } from "../../Config/index"; //newly added
import { actionType } from "../../Context/reducer";
import axios from "axios"; // newly added
import swal from "sweetalert"

async function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
}



const C1 = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [{ id, page1Data, page2Data, page3Data, pack }, dispatch] = useStateValue();
  const [loader, setloader] = useState(false);
  const [shippingSame, sss] = useState(true);
  const navigate = useNavigate();

  const same = useRef();
  const different = useRef();

  const handlePaymentData = async (res) => {
    await axios.post(`${backendbaseuri}api/send/order/payment`, { ...res, id: id })
  }

  useEffect(() => {
    if (page3Data) {
      if (page3Data.shippingSame){
        same.current.checked = true;
        sss(true)
      }
      else { 
        different.current.checked = true; 
        sss(false)
      }
    }else 
      same.current.checked = true;
  }, []);


  //Razorpay Info
  const [name, setName] = useState("Test Name");

  async function displayRazorpay(id) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }

    const data = await axios.post(`${backendbaseuri}razorpay/`, {id: id});
    console.log(data);

    const options = {
      // key: "rzp_live_N1vLKkvguKjZGT", // Enter the Key ID generated from the Dashboard
      key: "rzp_test_WPA6J9hOSf3nLT", // Enter the Key ID generated from the Dashboard
      currency: data.data.currency,
      amount: data.data.amount.toString(),
      name: "Fittlyf",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
      prefill: {
        name: name,
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      handler: function async(response) {
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
        placeOrder(id);
        console.log(response);
        console.log("Order placed");

        swal({
          title: "Order Placed Successfully",
          text: "You will recieve an email about your order. THANK YOU :)",
          icon: "success",
          button: "Close",
        });

        handlePaymentData(response)

      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const placeOrder = async (id) => {
    let response = await axios.post(`${backendbaseuri}placeorder`, { id: id });
    console.log(response);

    console.log(pack)
    await axios.post(`${backendbaseuri}orders/set`, {
      id : id,
      emailPhoneNumber: page1Data.emailPhoneNumber,
      address: page1Data.address,
      cod: page2Data.cod,
      country: page1Data.country,
      firstName: page1Data.firstName,
      lastName: page1Data.lastName,
      apartmentAndOthers: page1Data.apartmentAndOthers,
      city: page1Data.city,
      state: page1Data.state,
      zip: page1Data.zip,
      price: pack.price,
      sku: pack.sku,
      PhoneNumber : page1Data.PhoneNumber,
    }).then(data => navigate(`/order/${data.data.data.orderID}`))

    // console.log(response)
    // navigate("/");
    // return response;
  };

  const orderPage3data = async () => {
    setloader(true);
    const data = {
      shippingSame: shippingSame,
      id: id,
    };

    console.log(data)

    let response = await sendOrderPage3Data(data);

    dispatch({
      type: actionType.SET_PAGE3,
      page3Data: data,
    });

    console.log(response);

    if (response.data.code === "success") {
      if (page2Data.cod) {
        placeOrder(id)
        navigate("/")
        return;
      }
      displayRazorpay(id);
      console.log("Pay!");
      setloader(false);
    }
  };

  return (
    <div className="flex justify-end box:w-[54vw]">
      <div className="w-screen sm:max-w-[45rem] overflow-auto">
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
                    <span className="font-semibold text-lg">₹{`${pack.price}`}</span>
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
                            YOSHA PCOS PCOD tablets | Delayed Periods | Ayurvedic
                          </h4>
                          <p className="my-2">{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p>
                        </div>
                        <span className="font-semibold">₹{`${pack.price}`}</span>
                      </div>

                      <hr className="bg-gray-300" />

                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="my-5">Subtotal</h5>
                          <h5 className="my-5">Shipping</h5>
                        </div>
                        <div className="text-right">
                          <h5 className="font-semibold my-4">₹{`${pack.price}`}</h5>
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
                          <span className="font-semibold text-2xl">₹{`${pack.price}`}</span>
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
                  <span className="text-black xl:pl-6">
                    {page1Data.emailPhoneNumber}
                  </span>{" "}
                </span>
                <span className="text-sm text-red-500 pl-2">
                  <Link to="/form">Change</Link>
                </span>
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
                <span className="text-sm text-red-500 pl-2">
                  <Link to="/form">Change</Link>
                </span>
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
                    {page2Data.cod
                      ? "Cash on Delivery - Shipping Charges · Free"
                      : "Prepaid - Free Shipping"}
                  </span>{" "}
                </span>
                <span className="text-sm text-red-500 pl-2">
                  <Link to="/payment">Change</Link>
                </span>
              </p>
            </div>

            <div>
              <h1 className="text-lg mt-8">Payment</h1>
              <p className="text-gray-500 text-sm my-3">
                All transactions are secure and encrypted.
              </p>
              <div className="border text-sm rounded-md">
                <div className=" px-5 py-5">
                  {page2Data.cod
                    ? "Cash on Delivery - Shipping Charges · Free"
                    : "Prepaid - Free Shipping"}
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-lg mt-8">Billing address</h1>
              <p className="text-gray-500 text-sm my-2">
                Select the address that matches your card or payment method.
              </p>
              <div className="border text-sm rounded-md">
                <div
                  onClick={() => (same.current.checked = true, sss(true))}
                  className=" cursor-pointer flex flex-wrap items-center px-5 py-5 justify-start"
                >
                  <input ref={same} type="radio" name="method" id="" />
                  <p className="pl-4">Same as shipping address</p>
                </div>
                <hr />
                <div
                  onClick={() => (different.current.checked = true, sss(false))}
                  className=" cursor-pointer flex items-center px-5 py-5 justify-start"
                >
                  <input ref={different} type="radio" name="method" id="" />
                  <p className="pl-4">Use a different billing address</p>
                </div>
              </div>
              {!shippingSame && <DropDown />}
            </div>

            <div className="mt-5">
              <div className="flex flex-col-reverse sm:flex-row sm:flex mb-10 sm:justify-between sm:items-center">
                <div className=" sm:my-0 flex justify-center">
                  <button className="text-sm text-red-500">
                    <Link to="/payment">&lt; Return to Billing</Link>
                  </button>
                </div>

                <div className="mb-5 sm:my-0">
                  {loader ? (
                    <>
                      <button className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full">
                        <div>Complete Order</div>
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => orderPage3data()}
                      className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full"
                    >
                      <div>Complete Order</div>
                    </button>
                  )}
                </div>
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
              <p className="my-2">{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p>
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

const DropDown = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-4 py-6 rounded items-center ">
        <input
          className="  w-[90%] focus:outline-red-500 border rounded-md px-4 py-3 text-sm"
          placeholder="Country/Region"
        />
        <input
          className="  w-[90%] focus:outline-red-500 border rounded-md px-4 py-3 text-sm"
          placeholder="Address"
        />
        <input
          className="  w-[90%] focus:outline-red-500 border rounded-md px-4 py-3 text-sm"
          placeholder="Appartment, suit, etc"
        />
        <input
          className="  w-[90%] focus:outline-red-500 border rounded-md px-4 py-3 text-sm"
          placeholder="City"
        />
        <input
          className="  w-[90%] focus:outline-red-500 border rounded-md px-4 py-3 text-sm"
          placeholder="state"
        />
        <input
          className="  w-[90%] focus:outline-red-500 border rounded-md px-4 py-3 text-sm"
          placeholder="pincode"
        />
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
