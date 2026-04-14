import { motion } from "framer-motion";

import cnn from "../assets/cnn.webp";
import tirto from "../assets/tirto.webp";
import forbes from "../assets/forbes.webp";
import google from "../assets/google.webp";
import nytimes from "../assets/nytimes.webp";

function Brands() {
  const logos = [
    { img: cnn, alt: "CNN" },
    { img: tirto, alt: "Tirto" },
    { img: forbes, alt: "Forbes" },
    { img: google, alt: "Google" },
    { img: nytimes, alt: "NY Times" },
  ];

  return (
    <section className="w-full mt-16">
      {/* Container max-width 1024px */}
      <div className="max-w-[1024px] mx-auto px-6">
        {/* Background box */}
        <motion.div
          className="bg-[#ebefff] rounded-2xl py-8 px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Logo Grid */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.img}
                alt={logo.alt}
                className="h-6 md:h-7 opacity-60 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Brands;
