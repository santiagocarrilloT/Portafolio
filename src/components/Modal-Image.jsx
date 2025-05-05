import { useState } from "react";
import "./modal-img.css";

const ModalImg = ({ imageSrc, titleProyect, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <img className="modal-img" src={imageSrc} alt={titleProyect} />
      </div>
    </div>
  );
};

export default ModalImg;
