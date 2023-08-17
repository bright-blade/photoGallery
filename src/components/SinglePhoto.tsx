import React, { useState } from "react";
import { Photo } from "../models/models";
import ModalPhoto from "./ModalPhoto";

interface SinglePhotoProps {
  photo: Photo;
  onCheckboxChange: (photoId: number, isChecked: boolean) => void;
  isChecked: boolean;
}

const SinglePhoto: React.FC<SinglePhotoProps> = ({
  photo,
  onCheckboxChange,
  isChecked,
}) => {
  const { alt, id, photographer, avgColor, src } = photo;

  const changeCheckboxHandler = () => {
    onCheckboxChange(id, isChecked);
  };

  const imgStyle = {
    backgroundImage: `linear-gradient(to bottom, ${avgColor}, ${avgColor}), url(${src.original})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "200px",
  };

  const srcset = `
    ${src.tiny && src.tiny + " 320w,"}
    ${src.small && src.small + " 480w,"}
    ${src.medium && src.medium + " 800w,"}
    ${src.large && src.large + " 1200w,"}
    ${src.large2x && src.large2x + " 1600w,"}
  `;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function handlePopupOpen() {
    openModal();
  }

  return (
    <div className="image-container relative tr" style={imgStyle}>
      <div className="flex items-center mb-4 absolute top-2 right-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 shadow text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={isChecked}
          onChange={changeCheckboxHandler}
        />
      </div>
      <img
        src={src.original}
        srcSet={srcset}
        alt={alt}
        className="photo"
        height={"200px"}
        loading="lazy"
        onClick={handlePopupOpen}
      />

      <ModalPhoto
        isOpen={isModalOpen}
        onClose={closeModal}
        src={src.original}
        photographer={photographer}
        alt={alt}
      />
    </div>
  );
};

export default SinglePhoto;
