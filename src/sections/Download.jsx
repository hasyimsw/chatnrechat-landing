import { motion } from "framer-motion";

import downloadImage from "../assets/downloadImage.webp";
import appStore from "../assets/appstore.webp";
import playStore from "../assets/playstore.webp";

function Download() {
  return (
    <section id="download" className="w-full py-24">
      <div className="max-w-[1024px] mx-auto px-6">
        {/* MAIN BOX */}
        <motion.div
          className="relative bg-blue-500 rounded-[32px] overflow-hidden px-10 md:px-16 shadow-lg shadow-blue-200"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="text-white">
              {/* Subtitle */}
              <p className="text-xs uppercase tracking-widest mb-5 pt-8">
                Download Aplikasinya
              </p>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
                Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau
                Symbian Store
              </h2>

              {/* List */}
              <ul className="text-sm opacity-90 mb-8 space-y-2">
                <li>• Android Version: Mojave+</li>
                <li>• iOS Version: Lolipop+</li>
                <li>• Symbian: 20.04+</li>
              </ul>

              {/* STORE BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <motion.img
                  src={appStore}
                  alt="App Store"
                  className="h-12 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />

                <motion.img
                  src={playStore}
                  alt="Google Play"
                  className="h-12 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={downloadImage}
                alt="Download Mockup"
                className="w-full max-w-[300px] md:max-w-[340px]"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Download;
