type param = {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  labelText?: string;
  labelFor?: string;
  sliderId?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Slider({
  min = 0,
  max = 100,
  step = 10,
  value,
  labelText,
  labelFor,
  sliderId = labelFor,
  handleChange = () => {},
}: param) {
  return (
    <div className="slider">
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        type="range"
        className="primary"
        id={sliderId}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <span>{value}</span>
    </div>
  );
}

export default Slider;
