import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { PAGE_SIZE } from "../../utils/constants";
function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  if (pageCount <= 1) return null;
  return (
    <div className="mt-4 flex justify-between">
      <Button
        onClick={previousPage}
        disabled={currentPage === 1}
        variation="pagination"
      >
        &larr; Prev
      </Button>
      <Button
        disabled={currentPage === pageCount}
        onClick={nextPage}
        variation="pagination"
      >
        Next &rarr;
      </Button>
    </div>
  );
}

export default Pagination;
