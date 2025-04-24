import { useState } from "react";
import "../styles/CustomDropdown.css";

interface CustomDropdownProps {
    theme?: "light" | "dark";
}

const CustomDropdown = ({ theme = "light" }: CustomDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Recommended");

    const options = ["Recommended", "Newest first", "Popular", "Price : high to low", "Price : low to high"];
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
                {selected}
                <span
                    className="material-icons"
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
                                onClick={() => handleSelect(option)}
                            >
                                {isSelected ? (
                                    <span className={`material-icons custom-check-icon ${isDark ? "dark" : "light"}`}>
                                        check
                                    </span>
                                ) : (
                                    <span className="empty-icon" />
                                )}
                                {option}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
