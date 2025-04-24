import { useState } from "react";
import "../styles/CustomDropdown.css";

interface CustomDropdownProps {
    theme?: "light" | "dark";
    options: string[],
    checkSelected: boolean
}

const CustomDropdown = ({ theme, options, checkSelected }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Recommended");

    const isDark = theme === "dark";

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
    };
    return (
        <div className="custom-dropdown">
            <button
                className={`custom-button ${isDark ? "dark" : "light"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="custom-button-label">{selected.toUpperCase()}</span>
                <span
                    className="material-symbols-outlined"
                    style={{ color: isDark ? "#fff" : "#000" }}
                >
                    keyboard_arrow_down
                </span>
            </button>

            {isOpen && (
                <ul className={`custom-dropdown-list ${isDark ? "dark" : "light"}`}>
                    {options.map((option) => {
                        const isSelected = selected === option;
                        return (
                            <li
                                key={option}
                                className={`custom-dropdown-item  ${isDark ? "dark" : "light"} `}
                                style={{ fontWeight: isSelected ? 'bold' : 'normal' }}
                                onClick={checkSelected ? undefined : () => handleSelect(option)}
                            >
                                {isSelected && checkSelected ? (
                                    <span className={`material-symbols-outlined custom-check-icon ${isDark ? "dark" : "light"}`}>
                                        check
                                    </span>
                                ) : (
                                    <span className="empty-icon" />
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
