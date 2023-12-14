import { useSearchParams } from "react-router-dom";
import MenuBoxes from "./MenuBoxes";
import CategoryMenu from "./CategoryMenu";

function MenuLayout() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || null;

  return (
    <section className=" my-auto ">
      {category ? <CategoryMenu /> : <MenuBoxes />}
    </section>
  );
}

export default MenuLayout;
