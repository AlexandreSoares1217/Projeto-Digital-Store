import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import "./Footer.css";

const socialLinks = [
  { icon: facebookIcon, alt: "Facebook", href: "https://www.facebook.com" },
  { icon: instagramIcon, alt: "Instagram", href: "https://www.instagram.com" },
  { icon: twitterIcon, alt: "Twitter", href: "https://www.twitter.com" },
];

function FooterInformations({ title, informations }) {
  return (
    <div className="footer__info">
      <h3 className="footer__info-title">{title}</h3>
      <ul>
        {informations.map((item) => (
          <li key={item.link}>
            {item.link.startsWith("/") ? (
              <Link to={item.link}>{item.text}</Link>
            ) : (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__about">
          <Link to="/" aria-label="Drip Store - Home">
            <Logo variant="footer" />
          </Link>
          <p className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <div className="footer__social">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.alt}
              >
                <img src={social.icon} alt={social.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        <FooterInformations
          title="Institucional"
          informations={[
            { text: "Sobre a Drip Store", link: "/about" },
            { text: "Blog", link: "/blog" },
            { text: "Trabalhe conosco", link: "/careers" },
          ]}
        />
        <FooterInformations
          title="Atendimento"
          informations={[
            { text: "Fale conosco", link: "/contact" },
            { text: "Política de privacidade", link: "/privacy" },
            { text: "Trocas e devoluções", link: "/returns" },
          ]}
        />
        <FooterInformations
          title="Ajuda"
          informations={[
            { text: "Perguntas frequentes", link: "/faq" },
            { text: "Termos de uso", link: "/terms" },
          ]}
        />
      </div>

      <hr className="footer__divider" />
      <p className="footer__copyright">© 2024 Digital Store</p>
    </footer>
  );
}

export default Footer;
