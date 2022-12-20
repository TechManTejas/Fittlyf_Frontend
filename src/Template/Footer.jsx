import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import FootImg from "../Images/footImg.png"

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-[#2F2635] flex-col lg:flex-row lg:text-left p-4 text-sm flex-wrap justify-around text-gray-400 flex"
    >
      <div className="flex p-3 items-center justify-start">
        <img src={FootImg} className="w-36 h-16" alt="" />
      </div>
      <div className="flex">
        <div className="p-2">
          <h3 className="mb-6 text-white text-lg font-bold">Quick Links</h3>
          <ul>
            <li className="mt-2">Home</li>
            <li className="mt-2">Services</li>
            <li className="mt-2">About</li>
            <li className="mt-2">Contact</li>
          </ul>
        </div>
        <div className="p-2 ml-24">
          <h3 className="mb-6 text-white text-lg font-bold">Supports</h3>
          <ul>
            <li className="mt-2">FAQ</li> font-bold
            <li className="mt-2">Privacy Policy</li>
            <li className="mt-2">Terms of Use</li>
          </ul>
        </div>
      </div>

      <div className="p-2 text-start">
        <h3 className="mb-6 text-white text-lg font-bold">Contact Us</h3>
        <ul>
          <li className="mt-2">
            Second floor, 66, Hosa Rd, IAS Layout,<br/> Eastwood Twp, Kasavanahalli,
            Karnataka 560035{" "}
          </li>
          <li className="mt-2">+91-99724-62202</li>
          <li className="mt-2">support@fittlyf.com</li>
        </ul>
      </div>
      <div className="p-2 flex justify-between sm:flex-col">
        <h3 className="mb-6 text-white text-lg font-bold">Follow Us on</h3>
        <div className="mr-16 flex gap-10 sm:mb-16">
          <InstagramIcon sx = {{color : "white"}} />
          <TwitterIcon sx = {{color : "white"}} />
          <FacebookIcon sx = {{color : "white"}} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
