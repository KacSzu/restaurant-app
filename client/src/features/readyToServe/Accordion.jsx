import { useState } from "react";

import { useOrders } from "./useOrders";
import { useUpdateOrderStatus } from "./useUpdateOrderStatus";
import Loader from "../../ui/Loader";
import AccordionItem from "./AccordionItem";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { orders, isLoading } = useOrders("ready");
  const { updateOrder, isUpdating } = useUpdateOrderStatus();
  const isWorking = isUpdating || isLoading;

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  if (isWorking) return <Loader />;
  return (
    <div className="mx-auto mt-20 flex w-[600px] flex-col justify-center gap-4  text-base  uppercase ">
      {orders?.data?.map(({ _id, tableNumber, cart }, index) => (
        <AccordionItem
          key={_id}
          id={_id}
          tableNumber={tableNumber}
          cart={cart}
          index={index}
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
          updateOrder={updateOrder}
        />
      ))}
    </div>
  );
}

export default Accordion;
