import { Troubleshoot } from "@mui/icons-material";
import React, { useState } from "react";

const C1 = () => {

    const [showSummary, setShowSummary] = useState(false);

    return (
        <div className="flex justify-end box:w-[54vw] overflow-auto">
            <div className="w-screen sm:w-[36rem] h-screen flex flex-col justify-between px-4 sm:px-0 box:mx-14 box:ml-4">
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
                                        <i className="fa-solid fa-cart-shopping mr-2"></i>Show order
                                        summary<i className="ml-2 fa-solid fa-chevron-down"></i>
                                    </div>
                                </button>
                                <div>
                                    {/* <p className="my-2">{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p> */}
                                    {/* <span className="font-semibold text-lg">₹{`${pack.price}`}</span> */}
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
                                                {/* <p className="my-2">{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p> */}
                                            </div>
                                            {/* <span className="font-semibold">₹{`${pack.price}`}</span> */}
                                        </div>

                                        <hr className="bg-gray-300" />

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h5 className="my-5">Subtotal</h5>
                                                <h5 className="my-5">Shipping</h5>
                                            </div>
                                            <div className="text-right">
                                                {/* <h5 className="font-semibold my-4">₹{`${pack.price}`}</h5> */}
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
                                                {/* <span className="font-semibold text-2xl">₹{`${pack.price}`}</span> */}
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="bg-gray-300" />
                                </div>
                            )}
                        </div>

                    </div>
                    
                    <div className="border rounded p-3 my-4">
                        <h1 className="mb-2">Your order is confirmed</h1>
                        <p className="text-sm">You'll recieve confirmation email with your order number shortly</p>
                    </div>

                    <div className="border rounded p-3 my-4">
                        <h1 className="mb-2">Order updates</h1>
                        <p className="text-sm">You'll get shipping and delivery updates by email</p>
                    </div>

                    <div className="border rounded p-3 my-4">
                        <p className="text-sm">Congrats, your COD order is confirmed...</p>
                        <p className="text-sm">-</p>
                        <p className="text-sm">1. You'll recieve courier tracking number by email, SMS</p>
                        <p className="text-sm">-</p>
                        <p className="text-sm">3. Courier boy will call you for delivery</p>
                        <p className="text-sm">-</p>
                        <p className="text-sm">4. Pay at the time of delivery</p>
                        <p className="text-sm">-</p>
                    </div>

                    <div className="border rounded p-3 my-4">
                        <h1>Customer information</h1>
                        <p className="text-sm font-semibold mt-2">Contact information</p>
                        <p className="text-sm mt-2">sajal.deyasi8@gmail.com</p>
                        <p className="text-sm font-semibold mt-4">Shipping Address</p>
                        <p className="text-sm mt-2">Something Something</p>
                        <p className="text-sm">3, Vimal Indl Estate, Golani Complex, waliv, satival, Vasai (east)</p>
                        <p className="text-sm">D block</p>
                        <p className="text-sm">401506 Mumbai MH</p>
                        <p className="text-sm">India</p>
                        <p className="text-sm">9467581235</p>
                        <p className="text-sm font-semibold mt-2">Shipping Method</p>
                        <p className="text-sm mt-2">Cash on Delivery</p>
                        <p className="text-sm font-semibold mt-2">Payment Method</p>
                        <p className="text-sm mt-2">Cash on Delivery (COD) - INR 1875.00</p>
                        <p className="text-sm font-semibold mt-2">Billing Address</p>
                        <p className="text-sm mt-2">Something Something</p>
                        <p className="text-sm">3, Vimal Indl Estate, Golani Complex, waliv, satival, Vasai (east)</p>
                        <p className="text-sm">D block</p>
                        <p className="text-sm">401506 Mumbai MH</p>
                        <p className="text-sm">India</p>
                        <p className="text-sm">9467581235</p>
                    </div>

                    <div className="mb-5">
                        {true ? (
                            <>
                                <button className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full">
                                    <div>Continue Shopping</div>
                                </button>
                            </>
                        ) : (
                            <button
                                className="text-sm text-white bg-red-500 rounded-md py-6 sm:py-4 px-6 font-semibold w-full"
                            >
                                <div>Continue Shopping</div>
                            </button>
                        )}
                    </div>

                    <div className="flex justify-center items-center mb-5">
                        <p className="text-sm">Need help? <span className="text-red-500 font-semibold">Contact us</span></p>
                    </div>

                    <hr className="bg-gray-300" />

                    <div className="text-red-500 my-4 text-xs">
                        Shipping Policy
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
    );
};

const C2 = () => {
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
                            {/* <p className="my-2">{`${pack.period} ₹ ${pack.price} ${pack.bottle} bottle ${pack.tablets} tablets`}</p> */}
                        </div>
                        {/* <span className="font-semibold">{`₹${pack.price}`}</span> */}
                    </div>

                    <hr className="bg-gray-300" />

                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="my-5">Subtotal</h5>
                            <h5 className="my-5">Shipping</h5>
                        </div>
                        <div className="text-right">
                            {/* <h5 className="font-semibold my-4">{`₹${pack.price}`}</h5> */}
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
                            {/* <span className="font-semibold text-2xl">{`₹${pack.price}`}</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Form = () => {
    return (
        <>
            <div id="Form">
                <div className="flex items-center justify-center">
                    <C1/>
                    <div className="border-r h-screen hidden box:block bg-gray-300"></div>
                    <div className="hidden box:block">
                        <C2/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
