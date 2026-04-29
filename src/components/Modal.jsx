import Btn from "./Btn"

function Modal({ isOpen, title, message, onClose, buttons, children, buttonsLayout = "grid" }) {
  return (
    <div
      className={`modal fade ${isOpen ? "show d-block" : ""}`}
      style={{ backgroundColor: isOpen ? "rgba(0,0,0,0.5)" : "" }}
    >
      <div className="modal-dialog modal-dialog-centered" style={{ width: 400 }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            />
          </div>
          <div className="modal-body" style={{ paddingTop: "0.2rem" }}>
            {message && <p className="text-center">{message}</p>}
            {children}
          </div>
          {buttons && (
            <div className={`modal-footer ${buttonsLayout === "row" ? "gap-2" : "d-grid gap-2"}`} style={buttonsLayout === "row" ? { justifyContent: "center" } : {}}>
              {buttons.map((btn, index) => (
                <Btn
                  key={index}
                  text={btn.text}
                  onClick={btn.onClick}
                  type={btn.type}
                  size={btn.size}
                  width={btn.width}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal