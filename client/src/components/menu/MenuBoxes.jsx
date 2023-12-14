import { getCurrentUser } from "../authentication/userSlice";
import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { useSearchParams } from "react-router-dom";
import MenuBox from "./MenuBox";
import Modal from "../ui/Modal";
import AddMenuItemForm from "./addMenuItemForm";

const menuOptions = [
  {
    title: "Pizza",
    img: "pizza-160.jpg",
    category: "pizza",
  },
  {
    title: "Pasta",
    img: "pasta-160.jpg",
    category: "pasta",
  },
  {
    title: "Alcohol free drinks",
    img: "alcohol-free-160.jpg",
    category: "alcoholfree",
  },
  {
    title: "Wine's",
    img: "wines-160.jpg",
    category: "wines",
  },
];

function MenuBoxes() {
  const user = useSelector(getCurrentUser);
  const [searchParams, setSerachParams] = useSearchParams();
  function handleClick(value) {
    searchParams.set("category", value);
    setSerachParams(searchParams);
  }

  return (
    <div className="  grid w-full  grid-cols-2  justify-items-center gap-y-8  uppercase  xl:gap-y-12">
      {menuOptions.map(({ title, img, category }) => (
        <MenuBox
          onClick={handleClick}
          title={title}
          img={img}
          category={category}
          key={title}
        />
      ))}
      {user?.role === "admin" && (
        <div className="col-span-2 flex justify-center">
          <Modal>
            <Modal.Open opens="addMenuItemForm">
              <Button variation="primary">Add new item</Button>
            </Modal.Open>
            <Modal.Window name="addMenuItemForm">
              <AddMenuItemForm />
            </Modal.Window>
          </Modal>
        </div>
      )}
    </div>
  );
}
export default MenuBoxes;
