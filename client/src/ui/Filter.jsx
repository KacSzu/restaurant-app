import { useSearchParams } from "react-router-dom";
import Button from "./Button";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(1).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex justify-center gap-3 ">
      {options?.map(({ value, label }) => (
        <Button
          active={currentFilter === value ? "true" : undefined}
          variation="filter"
          key={value}
          onClick={() => handleClick(value)}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
