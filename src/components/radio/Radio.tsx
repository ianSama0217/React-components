type param = {
  name?: string;
  value?: string;
  labelText?: string;
  labelFor?: string;
  radioId?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  handleChange?: () => void;
  customStyle?: string;
};

function Radio({
  name = "",
  value = "",
  labelText,
  labelFor,
  radioId = labelFor,
  isChecked = false,
  isDisabled = false,
  handleChange = () => {},
  customStyle,
}: param) {
  return (
    <div className={`radio ${customStyle}`}>
      <input
        type="radio"
        className="checked-color"
        name={name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        id={radioId}
      />
      <label className="label" htmlFor={labelFor}>
        {labelText}
      </label>
    </div>
  );
}

export default Radio;
