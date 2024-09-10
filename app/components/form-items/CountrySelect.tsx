'use client';

import Select from 'react-select';
import useCountries from '../../hooks/useCountries';

export type TCountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

const formatOptionContent = (option: any) => (
  <div className="flex flex-row items-center gap-3">
    <div>{option.flag} </div>
    <div>
      {option.label},
      <span className="text-neutral-500 ml-1">{option.region}</span>
    </div>
  </div>
);

interface ICountrySelectProps {
  value?: TCountrySelectValue;
  onChange: (value: TCountrySelectValue) => void;
}
const CountrySelect = ({ value, onChange }: ICountrySelectProps) => {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as TCountrySelectValue)}
        formatOptionLabel={(option: any) => formatOptionContent(option)}
        classNames={{
          control: () => 'p-3 border-2',
          input: () => 'text-lg',
          option: () => 'text-lg',
        }}
        theme={(theme) => ({
          ...theme,
          primary: 'black',
          primary25: '#ffe4e6',
        })}
      />
    </div>
  );
};

export default CountrySelect;
