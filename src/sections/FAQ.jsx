import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Apakah aplikasi ini sudah dapat izin dari MUI?",
      answer:
        "Belum, tapi tenang saja karena aplikasi ini juga belum tentu dipakai banyak orang.",
    },
    {
      question: "Apakah aplikasi ini gratis?",
      answer:
        "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter.",
    },
    {
      question: "Apakah data saya akan dijual ke agen khusus US?",
      answer:
        "Tenang aja, data kamu gak akan dijual ke siapa-siapa karena gak ada yang mau beli juga.",
    },
    {
      question: "Kenapa bumi muter? Apa karena di depan ada yang nikah?",
      answer:
        "Pertanyaan ini belum bisa dijawab oleh ilmuwan manapun sampai sekarang.",
    },
    {
      question:
        "Gimana caranya supaya si Rizal mau bikin konten buat Array ID?",
      answer: "Jawabannya mungkin ada di dimensi lain.",
    },
    {
      question: "Kenapa game epep buruk, bang?",
      answer:
        "Ini adalah misteri yang bahkan developer-nya sendiri belum pahami.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 scroll-mt-8">
      <div className="max-w-[673px] mx-auto px-6">
        {/* HEADER */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
            Banyak Yang Nanya
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Pertanyaan Yang Sering Ditanyain
          </h2>

          <p className="text-gray-500 text-sm max-w-sm text-center mx-auto">
            Sebenarnya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi
            ya ditaruh sini aja siapa tau lo mau baca 'kan.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className={`transition-all duration-300
                  ${
                    isActive
                      ? "rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-300"
                      : "border-b-2 border-gray-200 text-gray-900"
                  }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 font-medium"
                >
                  <span className="text-sm">{faq.question}</span>

                  <span className="ml-4">
                    {isActive ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm opacity-90 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
