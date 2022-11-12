import Navbar from "../../Template/Navbar";
import Footer from "../../Template/Footer"

async function loadScript(src) {
    return new Promise(resolve => {
        const script = document.createElement('script');
        script.src = src
        document.body.appendChild(script);
        script.onload = () =>{
            resolve(true);
        }
        script.onerror = () => {
            resolve(false);
        }
    })
}

const RazorpayGateway = () => {

    async function displayRazorpay(){

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        
        if(!res) {
            alert('Razorpay SDK failed to load')
            return
        }

        const options = {
            "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
            "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Fittlyf",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "prefill": {
                "name": "Gaurav Kumar",
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
        var rzp1 = new Razorpay(options);
    }

    return (
        <>
            <Navbar/>
            <div className="h-screen">
                <button className="bg-amber-300" onClick={() => {
                    displayRazorpay()
                }}>Pay</button>
            </div>
            <Footer/>
        </>
    )
}

export default RazorpayGateway
