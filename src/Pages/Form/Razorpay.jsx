import Navbar from "../../Template/Navbar";
import Footer from "../../Template/Footer"
import { useState } from "react";
import axios from "axios"

async function loadScript(src) {
    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src
        
        script.onload = () => {
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }

        document.body.appendChild(script);
    })
}

const RazorpayGateway = () => {

    const [name, setName] = useState('Test Name')

    async function displayRazorpay() {

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load')
            return
        }

        const data = await axios.post('http://localhost:9000/razorpay/', {})
        console.log(data)

        const options = {
            "key": "rzp_test_YGbpgyDF6Ac4JM", // Enter the Key ID generated from the Dashboard
            "currency": data.data.currency,
            "amount": data.data.amount.toString(),
            "name": "Fittlyf",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": {
                "name": name,
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <>
            <Navbar />
            <div className="h-screen">
                <button className="bg-amber-300" onClick={displayRazorpay}>Pay</button>
            </div>
            <Footer />
        </>
    )
}

export default RazorpayGateway
