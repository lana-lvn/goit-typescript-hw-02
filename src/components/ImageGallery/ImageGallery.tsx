import { FC } from "react";
import { Picture } from "../../App";
import ImageCard from "../ImageCard/ImageCard";
import s from "./imageGallery.module.css";

interface ImageGalleryProps {
  pictures: Picture[];
  openModal: (urlLarge: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ pictures, openModal }) => {
  return (
    <ul className={s.list}>
      {pictures.map((picture) => (
        <li key={picture.id} className={s.listItem}>
          <ImageCard
            src={picture.urls.small}
            urlLarge={picture.urls.regular}
            alt={picture.description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
