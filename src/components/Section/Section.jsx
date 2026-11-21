import { Link } from "react-router-dom";
import "./Section.css";

function Section({ title, titleAlign = "left", link, children }) {
  const isInternal = link?.href?.startsWith("/");

  return (
    <section className="section">
      <div className={`section__header section__header--${titleAlign}`}>
        <h2 className="section__title">{title}</h2>
        {link &&
          (isInternal ? (
            <Link className="section__link" to={link.href}>
              {link.text}
            </Link>
          ) : (
            <a className="section__link" href={link.href} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          ))}
      </div>

      <div className="section__content">{children}</div>
    </section>
  );
}

export default Section;
