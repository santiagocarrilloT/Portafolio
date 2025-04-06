import "./modal-img.css";

const ModalImg = ({ imageSrc, titleProyect }) => {
  return (
    <article className="modal isOpen">
      <div className="modal-content">
        <img className="modal-img" src={imageSrc} alt={titleProyect} />
      </div>
    </article>
  );
};

export default ModalImg;
