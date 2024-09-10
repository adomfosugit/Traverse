import { EBadgeStatus } from './types/common';

interface IBadgeProps {
  status: EBadgeStatus;
  styles?: string;
}
const Badge = ({ status, styles }: IBadgeProps) => {
  const getBadgeColor = () => {
    let badgeColor;
    switch (status) {
      case EBadgeStatus.COMPLETED:
        badgeColor = 'bg-green-100 text-green-700';
        break;
      case EBadgeStatus.ERROR:
        badgeColor = 'bg-red-100 text-red-700';
        break;
      case EBadgeStatus.IN_PROGRESS:
        badgeColor = 'bg-yellow-100 text-yellow-700';
        break;
      default:
        badgeColor = 'bg-slate-100 text-slate-700';
        break;
    }
    return badgeColor;
  };
  return (
    <div
      className={`w-24 h-8 rounded-full text-center p-1 ${getBadgeColor()} ${styles}`}
    >
      {status}
    </div>
  );
};

export default Badge;
