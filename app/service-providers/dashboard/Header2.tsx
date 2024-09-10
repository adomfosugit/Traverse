'use client';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import Button from '../../components/form-items/Button';

interface IHeaderProps {
  backText?: string;
  title: string;
  subText: string;
  buttonText?: string;
  buttonAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  linkPath?: string;
  secondaryAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  secondaryActionText?: string;
}
const Header2 = ({
  backText,
  title,
  subText,
  buttonText,
  buttonAction,
  linkPath,
  secondaryAction,
  secondaryActionText,
}: IHeaderProps) => {
  const router = useRouter();

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!buttonAction) {
      return;
    }
    buttonAction?.(event);
  };
  const handleSecondaryClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!secondaryAction) {
      return;
    }
    secondaryAction?.(event);
  };

  return (
    <div className="mt-10">
      {backText && (
        <div
          className="flex text-center mb-3 cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLongLeftIcon className="w-4 h-4 mr-2 mt-1" />
          <p className="text-gray-600">{backText}</p>
        </div>
      )}
      <div className="flex flex-row justify-between">
        <div className="mr-6">
          <p className="font-medium text-xl">{title}</p>
          <p className="text-sm text-gray-400 mt-2">{subText}</p>
        </div>
        <div className="w-1/4 flex flex-row items-center gap-4">
          {secondaryAction && secondaryActionText && (
            <Button
              label={secondaryActionText}
              onClick={handleSecondaryClick}
              outline
            />
          )}
          {buttonText && buttonAction && (
            <Button onClick={handleButtonClick} label={buttonText} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header2;
