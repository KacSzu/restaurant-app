import { HiArrowDown } from "react-icons/hi2";
import ButtonIcon from "../ui/ButtonIcon";
import Button from "../ui/Button";

function AccordionItem({
  id,
  activeIndex,
  index,
  cart,
  tableNumber,
  isWorking,
  toggleAccordion,
  updateOrder,
}) {
  const newStatus = "done";
  function handleClick() {
    updateOrder({ id, newStatus });
  }

  return (
    <div className=" rounded-lg bg-neutral-200 px-6 py-2 xl:text-lg">
      <div className="flex justify-between ">
        <span className=" font-medium ">Order #{id.slice(0, 8)}</span>
        <span className=" font-medium ">Table #{tableNumber}</span>
        <div
          className={activeIndex === index ? " rotate-180 duration-300 " : ""}
        >
          <ButtonIcon variation="small" onClick={() => toggleAccordion(index)}>
            <HiArrowDown />
          </ButtonIcon>
        </div>
      </div>
      {activeIndex === index && (
        <div className="p-4">
          <div className="flex flex-col ">
            {cart.map(({ name, quantity }) => (
              <span key={name}>
                {quantity} x {name}
              </span>
            ))}
            <div className="flex justify-end ">
              <Button
                onClick={handleClick}
                disabled={isWorking}
                variation="primary"
              >
                Served
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccordionItem;
