"use client"
import { useState } from "react";
import "../styles/CustomDropdown.css";

interface CustomDropdownProps {
    theme?: "light" | "dark";
    options: string[],
    checkSelected: boolean,
    title: string,
}

const CustomDropdown = ({ theme, options, checkSelected, title }: CustomDropdownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [optionSelected, setOptionSelected] = useState<string>(title);
    const isDark = theme === "dark";
    const handleSelect = (option: string) => {
        setOptionSelected(option);
        setIsDropdownOpen(false);
    };
    return (
        <div className={`custom-dropdown ${isDark ? "dark" : "light"}`}>
            <button className={`custom-button ${isDark ? "dark" : "light"}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} >
                <span className="custom-button-label">{optionSelected?.toUpperCase()}</span>
                <span className="material-symbols-outlined"
                    style={{ color: isDark ? "#fff" : "#000" }}>
                    keyboard_arrow_down
                </span>
            </button>

            {isDropdownOpen && (
                <ul className={`custom-dropdown-list ${isDark ? "dark" : "light"}`}>
                    {options.map((option: string) => {
                        const isSelected = optionSelected === option;
                        return (
                            <li
                                key={option}
                                className={`custom-dropdown-item  ${isDark ? "dark" : "light"} `}
                                style={{ fontWeight: isSelected ? 'bold' : 'normal' }}
                                onClick={checkSelected ? () => handleSelect(option) : undefined}
                            >
                                {(isSelected && checkSelected) ? (
                                    <span className={`material-symbols-outlined custom-check-icon ${isDark ? "dark" : "light"}`}>
                                        check
                                    </span>
                                ) : (
                                    <span className="empty-icon" style={{ display: checkSelected ? 'block' : 'none' }} />
                                )}
                                {option.toUpperCase()}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
