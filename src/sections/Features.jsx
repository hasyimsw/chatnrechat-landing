import { motion } from "framer-motion";

import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

function Features() {
  const features = [
    {
      image: feature1,
      title: "Groups to keep in touch",
      description:
        "Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos.",
    },
    {
      image: feature2,
      title: "Simple, Reliable Messaging",
      description:
        "Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.",
    },
    {
      image: feature3,
      title: "Speak Freely",
      description:
        "With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free video calls, you can have face-to-face conversations.",
    },
  ];

  return (
    <section id="fitur" className="w-full bg-[#f4f7fb] py-20 mt-20 scroll-mt-16">
      <div className="max-w-[1024px] mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Small Label */}
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
            Nggak Harus Sih Sebenarnya
          </p>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Kenapa Harus Pakai Chat N' Rechat?
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-base">
            Sebenarnya yang bagus itu sih WhatsApp loh, mending pake WhatsApp
            aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-evenly items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >

              {/* IMAGE */}
              <div className="mb-8">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-30 max-w-[180px] mx-auto"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;
