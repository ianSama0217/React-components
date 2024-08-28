type param = {
  type?: "circle" | "square"; //circle || square
  isChecked: boolean; //預設是否選取
  handleChange?: () => void;
};

function Switch({
  type = "circle",
  isChecked,
  handleChange = () => {},
}: param) {
  return (
    <div className="switch">
      {type !== "circle" ? (
        <div className="button b2" id="btn-square">
          <input
            type="checkbox"
            className="checkbox"
            onChange={handleChange}
            checked={isChecked}
          />
          <div className="knobs">
            <span></span>
          </div>
          <div className="layer"></div>
        </div>
      ) : (
        <div className="button r" id="btn-circle">
          <input
            type="checkbox"
            className="checkbox"
            onChange={handleChange}
            checked={isChecked}
          />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      )}
    </div>
  );
}

export default Switch;
