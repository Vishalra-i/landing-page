import React from 'react';
import Select from 'react-select';
import Image from 'next/image';
import countryCodes from './countryCodes';

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: 'none', 
    boxShadow: 'none', 
    padding: '0', 
    minHeight: '30px', 
    cursor: 'pointer' ,
    width : '100%' ,

  }),
  option: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    padding: '10px 8px',  
    fontSize : ' 9px',
    width : '100%' ,
  }),
  singleValue: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',

  }),
};

const formatOptionLabel = ({ flag, name, code }) => (
  <div className="flex items-center w-full p-0 ">
    <Image src={flag} alt={`${name} flag`} width={30} height={30} />
  </div>
);

function CountryCodeDropdown({ selectedCode, onChange }) {
  const options = countryCodes.map((country) => ({
    value: country.code,
    label: country.name,
    flag: country.flag,
    ...country,
  }));

  const selectedOption = options.find((option) => option.value === selectedCode);

  return (
    <Select
      value={selectedOption}
      onChange={(selected) => onChange({ target: { value: selected.value } })}
      options={options}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
    />
  );
}

export default CountryCodeDropdown;
