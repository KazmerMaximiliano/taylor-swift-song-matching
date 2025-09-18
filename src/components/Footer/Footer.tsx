import { useTranslation } from "react-i18next";
import "./Footer.styles.css";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <p>
        {t("created_by")}{" "}
        <b>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/maximiliano-kazmer/"
          >
            Kazmer Maximiliano
          </a>
        </b>
      </p>
      <p>
        {t("thanks")}{" "}
        <b>
          <a target="_blank" href="https://github.com/meganmansfield">
            Megan Mansfield
          </a>{" "}
          -{" "}
          <a
            target="_blank"
            href="https://github.com/meganmansfield/taylorswift"
          >
            {t("reference")}
          </a>
        </b>
      </p>
    </div>
  );
};
