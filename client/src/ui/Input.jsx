function Input({ onChange, value, id, placeholder, type }) {
  return (
    <input
      onChange={onChange}
      value={value}
      id={id}
      placeholder={placeholder}
      type={type}
      className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 placeholder:uppercase   focus:outline-none focus:ring focus:ring-neutral-400  focus:ring-offset-2 xl:w-[350px] xl:text-lg"
    />
  );
}

export default Input;
