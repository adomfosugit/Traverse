import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

interface IAlertProps {
  text: string;
  stageCompleted: boolean;
}
const Alert = ({ text, stageCompleted }: IAlertProps) => {
  return (
    <div
      className={twMerge(
        'hidden bg-amber-700 p-3 rounded-md my-8',
        `${!stageCompleted ? 'flex' : ''}`
      )}
    >
      <InformationCircleIcon className="w-5 h-5 text-white" />
      <p className="text-white ml-3 text-sm">{text}</p>
    </div>
  );
};

export default Alert;
