import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.png";
import { BsDownload, BsPerson } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Hero() {
  return (
    <section id="beranda" className="w-full pt-24 md:pt-32 min-h-screen">
      {/* Container max-width 1024px */}
      <div className="max-w-[1024px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Small Label */}
          <p className="text-blue-600 text-xs font-semibold tracking-wider uppercase mb-4">
            Chat n' Rechat
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
            Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak
            lupa jasa pahlawan!
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-md mx-auto md:mx-0">
            Sebenarnya banyak banget aplikasi chatting yang lebih bagus dari
            ini, maka dari itu lebih baik pakai yang lain aja daripada pakai
            aplikasi yang ini.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            {/* Register Button */}
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm hover:bg-blue-700 transition font-semibold cursor-pointer shadow-md shadow-blue-200 flex items-center gap-2">
              Register
              <IoArrowForwardCircleOutline className="text-xl" />
            </button>

            {/* Learn More Button */}
            <button className="bg-blue-100 text-blue-600 px-8 py-3 rounded-lg text-sm hover:bg-blue-200 transition font-semibold cursor-pointer shadow-md shadow-blue-200">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-8 mt-10 text-center md:text-left">
            {/* Download */}
            <div className="flex items-start gap-4">
              <BsDownload />
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Total Download
                </p>
                <h3 className="text-lg font-semibold text-gray-900">
                  1,501,234
                </h3>
              </div>
            </div>

            {/* Users */}
            <div className="flex items-start gap-4">
              <BsPerson />
              <div>
                <p className="text-xs text-gray-400 uppercase">Total Users</p>
                <h3 className="text-lg font-semibold text-gray-900">
                  1,318,829
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full max-w-md mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
