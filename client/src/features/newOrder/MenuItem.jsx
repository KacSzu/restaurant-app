import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
function MenuItem({ name, ingredients, unitPrice, index }) {
  function prepareIngredients(ingredients) {
    return ingredients.join(", ");
  }
  return (
    <div className="grid grid-cols-[0.05fr,0.82fr,0.03fr,0.1fr] items-center justify-between pt-1">
      <p className=" mr-1 text-4xl font-light">{index + 1}</p>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold ">{name}</h3>
        {ingredients && (
          <p className="text-xs uppercase">{prepareIngredients(ingredients)}</p>
        )}
      </div>
      <p className="text-sm">{formatCurrency(unitPrice)}</p>
      <div className="flex items-center justify-center">
        <Button variation="small">Add</Button>
      </div>
    </div>
  );
}

export default MenuItem;
