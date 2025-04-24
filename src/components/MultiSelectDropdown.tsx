import { useState } from "react";
import "../styles/MultiSelectDropdown.css";

interface MultiSelectDropdownProps {
    theme?: "light" | "dark";
    title: string;
    options: string[];
}

const MultiSelectDropdown = ({ theme, options, title }: MultiSelectDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string[]>([]);


    const isAllSelected = selected.length === options.length;

    const toggleOption = (option: string) => {
        setSelected((prevSelected) =>
            prevSelected.includes(option)
                ? prevSelected.filter((item) => item !== option)
                : [...prevSelected, option]
        );
    };

    const handleSelectAll = () => {
        setSelected(isAllSelected ? [] : [...options]);
    };

    const displayValue = "Filter options";

    return (
        <div className="dropdown-wrapper">
            <button
                className={`dropdown-button ${theme}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="drop-down-top">
                    {title}
                    <span className="material-symbols-outlined">
                        keyboard_arrow_down
                    </span>
                </span>
                <span className="drop-down-bottom">
                    All
                </span>

            </button>

            {isOpen && (
                <ul className={`dropdown-list ${theme}`}>
                    <li
                        className={`dropdown-select-all ${theme}`}
                        onClick={handleSelectAll}
                    >
                        <u>{isAllSelected ? "Unselect all" : "Select all"}</u>
                    </li>
                    {options.map((option) => {
                        const isSelected = selected.includes(option);
                        return (
                            <li
                                key={option}
                                onClick={() => toggleOption(option)}
                                className={`dropdown-item ${isSelected ? "selected" : ""} ${theme}`}
                            >
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
