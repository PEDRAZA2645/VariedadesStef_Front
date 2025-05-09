import logo from "../assets/logo.png";
import ubicacion from "../assets/ubicacion.svg";
import { Link } from "react-router-dom";
import meta from "../assets/meta.svg";
import tiktok from "../assets/tiktok.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import WhatsApp from "../assets/WhatsApp.svg";

const Footer = () => {
  return (
    <footer className="footer bg-sixth w-full h-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base text-black p-8 gap-6 mt-5">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-25 h-20 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="text-center md:text-left">
          <img src={ubicacion} alt="Ubicación" className="mb-2 mx-auto md:mx-0 w-8 h-8" />
          <ol>
            <li className="mb-2">Madrid / Cundinamarca</li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start gap-6">
        <h1 className="uppercase font-bold">Redes Sociales</h1>
        <ol className="flex gap-6">
          <li>
            <Link to="https://www.facebook.com">
              <img src={meta} alt="Facebook" className="social-icon w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="https://www.tiktok.com">
              <img src={tiktok} alt="TikTok" className="social-icon w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com">
              <img src={instagram} alt="Instagram" className="social-icon w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="https://www.twitter.com">
              <img src={twitter} alt="Twitter" className="social-icon w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link to="https://chat.whatsapp.com/HlWua8NmQtRE8IZpoTB6sp">
              <img src={WhatsApp} alt="WhatsApp" className="social-icon w-8 h-8" />
            </Link>
          </li>
        </ol>
      </div>
      <div className="text-center md:text-left">
        <h1 className="mb-4 uppercase font-bold text-lg">¿Qué quieres hacer?</h1>
        <Link to="/products" className="btn-fifth mb-4 py-2 px-4 bg-blue-500 text-white rounded-lg">
          Comprar...
        </Link>
        <p className="text-sm md:text-base mt-4">
          © 2025 <span className="font-bold">Diseñado por Variedades Stef</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;