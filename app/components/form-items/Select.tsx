'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';
import { TSelectOptions } from '../../types/common';

interface ISelectProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  placeholder?: string;
  required?: boolean;
  styles?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  data: TSelectOptions[];
}

const Select = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  placeholder,
  register,
  required,
  errors,
  styles,
  data,
}: ISelectProps) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="
            text-neutral-700
            absolute
            top-5
            left-2
          "
        />
      )}
      <select
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder={placeholder}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-base
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${
            errors[id]
              ? 'focus:border-rose-500'
              : 'focus:border-traverse-yellow'
          }
          ${styles ? styles : ''}
        `}
      >
        {data?.length > 0 &&
          data?.map((option) => (
            <option key={option.id}>{option.value}</option>
          ))}
      </select>
      <label
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          ${formatPrice ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Select;
