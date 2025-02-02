import Logo from "../images/LogoNav.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    const navbarHeight = document.querySelector("nav").offsetHeight; // Get the height of the navbar
    const targetPosition =
      target?.getBoundingClientRect().top + window.pageYOffset - navbarHeight; // Calculate scroll position

    // Smooth scroll to the target position accounting for the navbar height
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-200 text-slate-900 py-10 md:py-8 px-4 md:px-8 ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-12 my-10">
        {/* Logo and Description */}
        <div className="lg:w-2/5 flex flex-col items-center lg:items-start mb-10 lg:mb-0">
          <h1 className=" text-custom-blue text-lg md:text-xl pb-4 lg:text-2xl font-bold">
            KIGALI REFRIGRATION SYSTEMS REPAIR AND MOTOR REWINDING COMPANY Ltd
          </h1>
          <p className="text-center lg:text-left mb-4">
            Kigali Refrigeration Systems Repair and Motor Rewinding Ltd. was
            founded in February 2010 in Kigali with the mission to provide
            high-quality, reliable, and affordable repair and maintenance
            services for refrigeration systems and electric motors. Our team of
            highly skilled technicians is dedicated to delivering expert
            solutions, ensuring that your equipment operates at peak performance
            and longevity.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-slate-900"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-slate-900"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-slate-900"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-blue hover:text-slate-900"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-custom-blue">
            Useful Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "#home")}
                className="hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="hover:underline"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, "#products")}
                className="hover:underline"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-custom-blue">
            Air Condition and Refrigeration services
          </h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="hover:underline"
              >
                Air conditioning installation and maintenance
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="hover:underline"
              >
                Milk-cooler installation and maintenance
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="hover:underline"
              >
                Fridge and freezer maintenance
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="hover:underline"
              >
                Car refrigeration system repair
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="hover:underline"
              >
                Industrial compressed air dryer maintenance
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="hover:underline"
              >
                Cold room installation and maintenance
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "#services")}
                className="hover:underline"
              >
                Washing machine repair
              </a>
            </li>
          </ul>
        </div>

        {/* Our Products */}
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-lg font-bold mb-4 text-custom-blue">
            Electric Motor services
          </h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, "#products")}
                className="hover:underline"
              >
                AC and DC motor rewinding
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, "#products")}
                className="hover:underline"
              >
                Single-phase and three-phase motor rewinding
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, "#products")}
                className="hover:underline"
              >
                Single-phase and three-phase motor installation
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, "#products")}
                className="hover:underline"
              >
                Pump rewinding
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleScroll(e, "#products")}
                className="hover:underline"
              >
                Welding machine repair
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 md:mt-8 pt-4 text-center text-slate-900">
        &copy; {new Date().getFullYear()} FrigeMotor Tech Solution. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
