import { useState } from "react";
import { HiArrowDown } from "react-icons/hi2";

import Button from "../../ui/Button";
import ButtonIcon from "../../ui/ButtonIcon";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const readyOrders = [
    {
      id: 1,
      tableNum: 12,
      cart: [
        { name: "Margaritha", quantity: 4 },
        { name: "diavolo", quantity: 4 },
      ],
    },
    { id: 2, tableNum: 14, cart: [{ name: "diavola", quantity: 4 }] },
    { id: 3, tableNum: 15, cart: [{ name: "hawai", quantity: 3 }] },
    { id: 4, tableNum: 3, cart: [{ name: "fungi", quantity: 2 }] },
    { id: 5, tableNum: 1, cart: [{ name: "peperoni", quantity: 1 }] },
    { id: 6, tableNum: 1, cart: [{ name: "peperoni", quantity: 1 }] },
    { id: 7, tableNum: 1, cart: [{ name: "peperoni", quantity: 1 }] },
  ];
  return (
    <div className="mx-auto mt-20 flex w-[400px] flex-col justify-center gap-4  text-base  uppercase ">
      {readyOrders.map(({ id, tableNum, cart }, index) => (
        <div key={id} className=" rounded-lg bg-neutral-200 px-6 py-2">
          <div className="flex justify-between">
            <span className=" font-medium ">Order #{id}</span>
            <span className=" font-medium ">Table #{tableNum}</span>
            <div
              className={
                activeIndex === index ? " rotate-180 duration-300 " : ""
              }
            >
              <ButtonIcon
                variation="small"
                onClick={() => toggleAccordion(index)}
              >
                <HiArrowDown />
              </ButtonIcon>
            </div>
          </div>
          {activeIndex === index && (
            <div className="p-4">
              <div className="flex flex-col ">
                {cart.map(({ name, quantity }) => (
                  <span key={name} className="text-base ">
                    {quantity} x {name}
                  </span>
                ))}
                <div className="flex justify-end ">
                  <Button variation="primary">Served</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
