const InputRadio = (props) => {
  return (
    <div className="flex">
      <input
        id={props.id}
        type="radio"
        name={props.name}
        value={props.value}
        className={props.className}
        onClick={props.onClick}
        onChange={props.onChange}
        checked={props.onChecked}
      />
      <label
        htmlFor={props.id}
        className="mb-0 ml-1 block cursor-pointer text-base font-semibold text-stone-800"
      >
        {props.id}
      </label>
    </div>
  );
};
export default InputRadio;
