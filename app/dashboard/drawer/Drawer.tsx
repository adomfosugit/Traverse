import { landPurchaseStages } from './Stages';
import SubMenu from './SubMenu';

const Drawer = () => {
  const landStages = landPurchaseStages;
  return (
    <div
      className="relative md:fixed min-h-screen inset-0 p-4 overflow-y-auto bg-slate-900 w-2/12 dark:bg-gray-800 hidden md:block pt-20"
      aria-labelledby="drawer-label"
    >
      {landStages.map((stage) => (
        <SubMenu key={stage.id} item={stage} />
      ))}
    </div>
  );
};

export default Drawer;
