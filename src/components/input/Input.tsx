type param = {
  arrange?: "row" | "column";
  type?: string;
  value?: string;
  placeholder?: string;
  labelText?: string;
  labelFor?: string;
  inputId?: string;
  isDisabled?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyle?: string;
};

function Input({
  arrange = "column",
  type = "text",
  value = "",
  placeholder = "",
  labelText = "",
  labelFor,
  inputId = labelFor,
  isDisabled = false,
  handleChange,
  customStyle,
}: param) {
  return (
    <div className={`input ${arrange} ${customStyle}`}>
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        id={inputId}
        disabled={isDisabled}
        onChange={handleChange ? handleChange : undefined}
      />
    </div>
  );
}

export default Input;
