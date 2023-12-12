import { forwardRef } from "react";

const RoleSelect = forwardRef(({ ...props }, ref) => (
  <select
    {...props}
    ref={ref}
    className="w-[300px] rounded-lg border border-neutral-800 px-6 py-3 text-base duration-500 focus:outline-none focus:ring focus:ring-neutral-400 focus:ring-offset-2 xl:w-[350px] xl:text-lg"
    id="userRole"
  >
    <option value="waiter">Waiter</option>
    <option value="kitchen">Kitchen</option>
    <option value="admin">Admin</option>
  </select>
));

export default RoleSelect;
