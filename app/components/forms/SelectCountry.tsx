'use client';

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';

export type SelectCountryValue = {
    value: string;
    label: string;
}

interface SelectCountryProps {
    value: SelectCountryValue;
    onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({
    value,
    onChange
}) => {
    const { getAll } = useCountries();
    return (
        <>
        <Select
            isClearable
            placeholder="Select Country"
            options={getAll()}
            value={value}
            onChange={(value) => onChange(value as SelectCountryValue)}
        />
        </>
    )
}

export default SelectCountry;