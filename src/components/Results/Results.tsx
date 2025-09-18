import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { ResultsProps } from "./Results.types";

export const Results = ({ results, onReset }: ResultsProps) => {
  const { t } = useTranslation();

  return (
    <div>
      {results.map((song, index) => (
        <iframe
          key={index}
          style={{ borderRadius: "12px" }}
          src={song}
          width="100%"
          height="100"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ))}
      <Button onClick={onReset} disabled={false}>
        {t("restart")}
      </Button>
    </div>
  );
};
