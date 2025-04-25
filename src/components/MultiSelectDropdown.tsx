import { useState } from "react";
import "../styles/MultiSelectDropdown.css";

interface MultiSelectDropdownProps {
    theme?: "light" | "dark";
    title: string;
    options: string[];
}
const MultiSelectDropdown = ({ theme, options, title }: MultiSelectDropdownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [optionSelected, setOptionSelected] = useState<string[]>([]);
    const isAllSelected = optionSelected.length === options.length;
    const toggleOption = (option: string) => {
        setOptionSelected((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option)
                : [...prevSelected, option]
        );
    };
    const handleSelectAll = () => {
        setOptionSelected(isAllSelected ? [] : [...options]);
    };
    return (
        <div className="dropdown-wrapper">
            <button className={`dropdown-button ${theme}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                <span className="drop-down-top">
                    {title}
                    <span className="material-symbols-outlined"> keyboard_arrow_down </span>
                </span>
                <span className="drop-down-bottom">All</span>
            </button>
            {isDropdownOpen && (
                <ul className={`dropdown-list ${theme}`}>
                    <li className={`dropdown-select-all ${theme}`}
                        onClick={handleSelectAll}>
                        <u>{isAllSelected ? "Unselect all" : "Select all"}</u>
                    </li>
                    {options.map((option: string) => {
                        const isSelected = optionSelected.includes(option);
                        return (
                            <li key={option}
                                onClick={() => toggleOption(option)}
                                className={`dropdown-item ${isSelected ? "selected" : ""} ${theme}`} >
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    readOnly
                                    className="dropdown-checkbox"
                                />
                                {option}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
