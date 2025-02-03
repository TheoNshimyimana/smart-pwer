const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button onClick={onClose} className="modal-close text-2xl">
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button onClick={onClose} className="modal-btn modal-btn-secondary">
            Cancel
          </button>
          <button className="modal-btn modal-btn-primary">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
