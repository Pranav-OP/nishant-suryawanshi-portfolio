import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/nishant-suryawanshi-06"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/__nishant__s"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com/Nishant41265604"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Nishant Suryawanshi</p>
    </footer>
  );
}
