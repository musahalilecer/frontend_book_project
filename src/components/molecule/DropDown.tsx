import React from 'react'
import Label from '../atomic/Label';

export type DropdownOption = {
    label: string;
    value: string;
};

interface DropDownProps {
    label: string;
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    id?: string;
}
const DropDown: React.FC<DropDownProps> = ({ label, options, value, onChange, id }) => {
    const selectId = id || `dropdown-${label.toLowerCase().replace(/\s+/g, '-')}`;
    return (
        <div>
            <select
                id={selectId}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full rounded-md border border-gray-300 shadow-sm p-2 text-sm focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="" disabled>
                    Select {label}
                </option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropDown