import { FC } from "react";
import s from "./imageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
  urlLarge: string;
  openModal: (urlLarge: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ src, alt, urlLarge, openModal }) => {
  const handleClick = (): void => {
    openModal(urlLarge);
  };

  return (
    <div className={s.imageCard}>
      <img onClick={handleClick} src={src} alt={alt} className={s.image} />
    </div>
  );
};

export default ImageCard;
