import Error from "./Error";

function FormRow({ children, label, error }) {
  return (
    <div className="flex flex-col items-center gap-3 text-lg xl:text-xl  ">
      <label htmlFor={children.props.id} className=" font-semibold">
        {label}
      </label>
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

export default FormRow;
