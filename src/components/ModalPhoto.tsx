import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  photographer: string;
  alt: string;
}

const ModalPhoto: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  src,
  photographer,
  alt,
}) => {
  if (!isOpen) return null;
  const textShadow = { textShadow: "rgb(0 0 0) 1px 1px 4px" };

  return (
    <>
      <div
        className="fixed w-full h-full bg-[#000000a3] z-[1250] top-0 left-0"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-[1250]">
        <div className="bg-white relative rounded-lg overflow-hidden shadow-xl h-5/6 w-11/12">
          <button
            className="px-3 py-1 float-right bg-gray-300 text-gray-100 rounded absolute top-0 right-0"
            onClick={onClose}
          >
            X
          </button>
          <img src={src} alt={alt} className="photo" />
          <p
            style={textShadow}
            className="px-3 py-1 float-right sha text-gray-300 rounded absolute bottom-0 right-0"
          >
            by {photographer}
          </p>
        </div>
      </div>
    </>
  );
};

export default ModalPhoto;
