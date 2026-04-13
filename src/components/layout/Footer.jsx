import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Footer() {
  const sitemapLinks = [
    "Beranda",
    "Fitur-fitur",
    "Teknologi",
    "FAQ",
    "Download",
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "#",
    },
    {
      icon: <FaFacebookF />,
      href: "#",
    },
    {
      icon: <FaTwitter />,
      href: "#",
    },
  ];

  return (
    <footer className="w-full pt-16 mt-24">
      <div className="max-w-[1024px] mx-auto p-10 bg-[#ebefff] rounded-t-2xl">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LOGO + DESCRIPTION */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="w-8 h-8" />

              <span className="font-semibold text-gray-900">
                Chat N' Rechat
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Sebenarnya banyak banget aplikasi chatting yang lebih bagus dari
              ini, maka dari itu lebih baik pakai yang lain aja daripada pakai
              aplikasi yang ini.
            </p>

            {/* COPYRIGHT */}
            <p className="text-xs text-gray-400 mt-4 font-semibold">
              COPYRIGHT © {new Date().getFullYear()}. CODE BY HASYIM
            </p>
          </div>

          {/* SITEMAP */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5">Sitemap</h4>

            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              {sitemapLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-blue-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-5">
              Tetap Terhubung
            </h4>

            <p className="text-sm text-gray-500 mb-5">
              Lihat kami di sosial media berikut.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-700 shadow-sm hover:text-blue-600 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
