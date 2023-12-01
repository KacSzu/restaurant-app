function SettingsRow({ children, label }) {
  return (
    <div className="flex flex-col items-center gap-3 ">
      <label htmlFor={children.props.id} className="text-lg font-semibold">
        {label}
      </label>
      {children}
    </div>
  );
}

export default SettingsRow;
