import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center px-10 py-5">
      <div className="flex gap-8">
        <a href="https://github.com/guilhermeHenrique08">
          <FaGithub className="text-xl transition-all hover:scale-110" />
        </a>

        <a href="https://www.linkedin.com/in/dev-guilherme-marques/">
          <FaLinkedin className="text-xl transition-all hover:scale-110" />
        </a>

        <a href="#">
          <FaInstagram className="text-xl transition-all hover:scale-110" />
        </a>
      </div>    
      <p className="mt-3 text-gray-500 text-center">
        &copy; 2023 MovieFlow by Guilherme Marques
      </p>
    </footer>
  );
};

export default Footer;
