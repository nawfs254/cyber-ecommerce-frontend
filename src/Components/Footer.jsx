import { FaXTwitter } from "react-icons/fa6";
import logo_white from "../assets/logo-white.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="z-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#181313] px-8 py-12 text-center text-[#CFCFCF] lg:px-36 lg:py-32 gap-x-16">
        <div className="flex flex-col items-center lg:items-start justify-start mb-4 md:col-span-2 lg:col-span-1">
          <img src={logo_white} alt="Company Logo" className="mb-5" />
          <p className="text-[13px] mb-8 lg:text-left">
            We are a residential interior design firm located in Portland. Our boutique-studio offers more than
          </p>
        </div>

        <div className="services mb-8 lg:text-left">
          <h3 className="font-semibold">Services</h3>
          <p className="text-sm leading-8 font-light">Bonus program</p>
          <p className="text-sm leading-8 font-light">Gift cards</p>
          <p className="text-sm leading-8 font-light">Credit and payment</p>
          <p className="text-sm leading-8 font-light">Service contracts</p>
          <p className="text-sm leading-8 font-light">Non-cash account</p>
          <p className="text-sm leading-8 font-light">Payment</p>
        </div>

        <div className="assistance mb-8 lg:text-left">
          <h3 className="font-semibold">Assistance to the buyer</h3>
          <p className="text-sm leading-8 font-light">Find an order</p>
          <p className="text-sm leading-8 font-light">Terms of delivery</p>
          <p className="text-sm leading-8 font-light">Exchange and return of goods</p>
          <p className="text-sm leading-8 font-light">Guarantee</p>
          <p className="text-sm leading-8 font-light">Frequently asked questions</p>
          <p className="text-sm leading-8 font-light">Terms of use of the site</p>
        </div>

        <div className="social-links flex justify-center lg:justify-start items-center gap-5 md:col-span-2 lg:col-span-1">
          <FaXTwitter size="1.7rem" />
          <FaFacebook size="1.7rem" />
          <FaLinkedin size="1.7rem" />
          <FaInstagram size="1.7rem" />
        </div>
      </div>
    </>
  );
};

export default Footer;
