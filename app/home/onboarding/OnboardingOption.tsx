import { ArrowSmallRightIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { EOnboardingOptionIcon } from '../../types/common';

interface IOnboardingOptionProps {
  icon: EOnboardingOptionIcon;
  title: string;
  link: string;
  color: string;
}
const OnboardingOption = ({
  icon,
  title,
  link,
  color,
}: IOnboardingOptionProps) => {
  return (
    <Link
      href={link}
      className={`flex h-16 md:h-28 bg-traverse-off_${color} items-center border border-traverse-${color} border-dashed hover:border-solid mb-4 rounded`}
    >
      {icon === EOnboardingOptionIcon.USER && (
        <UserIcon className={`h-6 w-6 ml-6 fill-traverse-${color}`} />
      )}
      <p className="ml-4 mr-auto text-traverse-${color}">{title}</p>
      <ArrowSmallRightIcon className="h-6 w-6 mr-6" />
    </Link>
  );
};

export default OnboardingOption;
