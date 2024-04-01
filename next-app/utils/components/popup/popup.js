import "./popup.css";
export function Popup({ setPopup }) {
  return (
    <div className="popup">
      <h2> Doy you wont to subscribe?</h2>
      <div className="popupButton">
        <button className="popupButton1" onClick={() => setPopup(false)}>
          No
        </button>
        <button className="popupButton2" onClick={() => setPopup(true)}>
          Yes
        </button>
      </div>
    </div>
  );
}
