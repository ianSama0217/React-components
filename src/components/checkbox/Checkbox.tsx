type param = {
  value?: string;
  labelText?: string;
  labelFor?: string;
  checkboxId?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  handleChange?: () => void;
  customStyle?: string;
};

function Checkbox({
  value = "",
  labelText = "",
  labelFor,
  checkboxId = labelFor,
  isChecked = false,
  isDisabled = false,
  handleChange = () => {},
  customStyle,
}: param) {
  return (
    <div className={`checkbox ${customStyle}`}>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        id={checkboxId}
      />
      <label htmlFor={labelFor}>{labelText}</label>
    </div>
  );
}

export default Checkbox;
