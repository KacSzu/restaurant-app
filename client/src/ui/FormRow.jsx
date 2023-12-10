function FormRow({ children, label }) {
  return (
    <div className="flex flex-col items-center gap-3 text-lg xl:text-xl  ">
      <label htmlFor={children.props.id} className=" font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormRow;
