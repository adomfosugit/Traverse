import { ETab } from '../../../../../types/common';

interface ITabBarProps {
  setTab: (tab: ETab) => void;
  currentTab: ETab;
}
const TabBar = ({ setTab, currentTab }: ITabBarProps) => {
  return (
    <div id="navbar-default">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500">
        <li className="mr-2">
          <button
            onClick={() => setTab(ETab.DETAILS)}
            aria-current="page"
            className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-8 hover:decoration-3  active:text-traverse-yellow ${
              currentTab === ETab.DETAILS
                ? 'text-traverse-yellow underline underline-offset-8 decoration-3'
                : ''
            } `}
          >
            Project Details
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setTab(ETab.SUBMIT)}
            className={`inline-block p-4 rounded-t-lg hover:underline hover:underline-offset-8 hover:decoration-3  active:text-traverse-yellow ${
              currentTab === ETab.SUBMIT
                ? 'text-traverse-yellow underline underline-offset-8 decoration-3'
                : ''
            } `}
          >
            Submission
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TabBar;
