'use client';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import Button from '../../components/form-items/Button';

interface IHeaderProps {
  backText?: string;
  title: string;
  subText: string;
  buttonText?: string;
  linkPath?: string;
  secondaryAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  secondaryActionText?: string;
}
const Header = ({
  backText,
  title,
  subText,
  buttonText,
  linkPath,
  secondaryAction,
  secondaryActionText,
}: IHeaderProps) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!secondaryAction) {
      return;
    }
    secondaryAction?.(event);
  };

  return (
    <div className="">
      {backText && (
        <div
          className="flex text-center mb-3 cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLongLeftIcon className="w-4 h-4 mr-2 mt-1" />
          <p className="text-gray-600">{backText}</p>
        </div>
      )}
      <div className="w-full flex">
        <div className="w-full grid grid-cols-5 justify-items-stretch">
          <div className="col-span-4">
            <p className="font-medium text-xl">{title}</p>
            <p className="hidden md:flex text-sm text-gray-400 mt-2 w-4/5 truncate">
              {subText}
            </p>
          </div>
          <div className="col-span-1 flex flex-row justify-items-end">
            {secondaryAction && secondaryActionText && (
              <Button
                label={secondaryActionText}
                onClick={handleClick}
                outline
              />
            )}
            {buttonText && linkPath && (
              <Button
                onClick={() => router.push(linkPath ?? '')}
                label={buttonText}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
