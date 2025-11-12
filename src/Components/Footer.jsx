import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-zinc-900 to-black text-gray-300 pt-12 pb-6 border-t border-zinc-800">
       <div className="absolute top-0 left-0 w-full h-[2px] animate-pulse bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 heading-text">
            Rent{" "}
            <span className="italic">
              {" "}
              <span className="text-primary">W</span>heels
            </span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Drive your dream car effortlessly. We offer the best car rental
            experience with trust, quality, and speed across Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="/browse-cars"
                className="hover:text-yellow-400 transition"
              >
                All Cars
              </a>
            </li>
            <li>
              <a href="/add-car" className="hover:text-yellow-400 transition">
                Add Your Car
              </a>
            </li>
            <li>
              <a
                href="/my-bookings"
                className="hover:text-yellow-400 transition"
              >
                Your Bookings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-500" /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-500" /> +880 1234 567 890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-500" />{" "}
              support@rentwheels.com
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/"
              className="p-2 bg-zinc-800 rounded-full hover:bg-yellow-500 transition group"
            >
              <Facebook
                size={18}
                className="text-yellow-500 group-hover:text-black transition"
              />
            </a>
            <a
              href="https://www.x.com/"
              className="p-2 bg-zinc-800 rounded-full hover:bg-yellow-500 transition group"
            >
              <FaXTwitter
                size={18}
                className="text-yellow-500 group-hover:text-black transition"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              className="p-2 bg-zinc-800 rounded-full hover:bg-yellow-500 transition group"
            >
              <Instagram
                size={18}
                className="text-yellow-500 group-hover:text-black transition"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-8"></div>

      <div className="text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-500 font-semibold">RentWheels</span>. All
          rights reserved.
        </p>
        <p className="text-xs mt-1">
          Developed by <span className="text-yellow-400">Moon Ahmed</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
