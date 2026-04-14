import { motion } from "framer-motion";
import technologyImage from "../assets/technologyImage.webp";

function Technology() {
  const techItems = [
    {
      icon: "😠",
      title: "Kamu Adalah Beban Kami",
      description:
        "Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!",
    },
    {
      icon: "🐨",
      title: "Males Buat Ngembangin",
      description:
        "Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belum pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.",
    },
    {
      icon: "😴",
      title: "Pokoknya Males Aja Lah",
      description:
        "Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makanya mending lo pake WhatsApp aja udah.",
    },
  ];

  return (
    <section id="teknologi" className="w-full py-24 scroll-mt-6">
      <div className="max-w-[1024px] mx-auto px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={technologyImage}
              alt="Technology Illustration"
              className="w-full max-w-[420px]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Subtitle */}
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-4">
              Teknologi Yang Digunakan
            </p>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-6">
              Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH
              Dan Jason Fried Pensiun! 😱
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara
              aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo
              pake dan daftar aplikasi ini jadi kita harus bayar server DO tiap
              bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa
              gak usah daftar:
            </p>

            {/* LIST ITEMS */}
            <div className="flex flex-col gap-8">
              {techItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {/* ICON BOX */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-lg shrink-0">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Technology;
