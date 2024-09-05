type param = {
  name?: string;
  value?: string;
  labelText?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  handleChange?: () => void;
  customStyle?:string;
};

function Radio({
  name = "",
  value = "",
  labelText,
  isChecked = false,
  isDisabled = false,
  handleChange = () => {},
  customStyle,
}: param) {
  return (
    <div className={`radio ${customStyle}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
      />
      <label>{labelText}</label>
    </div>
  );
}

export default Radio;
