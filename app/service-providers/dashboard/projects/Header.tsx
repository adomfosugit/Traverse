import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import Badge from '../../../Badge';
import { EBadgeStatus } from '../../../types/common';

interface IHeaderProps {
  backText?: string;
  title: string;
  subText: string;
  buttonText?: string;
  linkPath?: string;
  projectId: string;
  time: string;
}
const Header = ({
  backText,
  title,
  subText,
  buttonText,
  linkPath,
  projectId,
  time,
}: IHeaderProps) => {
  return (
    <div className="mt-10">
      {backText && (
        <div className="flex text-center mb-3">
          <ArrowLongLeftIcon className="w-4 h-4 mr-2" />
          <p className="text-sm text-gray-400">{backText}</p>
        </div>
      )}
      <div className="flex flex-row justify-between">
        <div>
          <div className="flex">
            <p className="font-medium text-2xl mr-4">{title}</p>
            <Badge status={EBadgeStatus.COMPLETED} />
          </div>
          <p className="text-sm text-gray-400 mt-2">{subText}</p>
        </div>
        <div className="hidden md:block">
          <div>
            <p className="">{projectId}</p>
            <p className="text-sm text-gray-400 text-end">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
