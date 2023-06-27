const InputText = (props) => {
  return (
    <div className="relative text-left">
      <label
        htmlFor={props.type}
        className="mb-2 block text-base text-[#5E6E85]"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        className={props.className}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
        maxLength="4"
      />
      <span className="border-lg absolute right-1 top-9 bg-white px-3 py-2 text-2xl font-bold text-[#345FF6]">
        {props.innerLabel}
      </span>
    </div>
  );
};

export default InputText;
