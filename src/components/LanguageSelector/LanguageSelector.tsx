import React from "react";
import "./LanguageSelector.css";
import { LanguageSelectorProps } from "./LanguageSelector.types";
import { LanguageSelectorViewModel } from "./LanguageSelectorViewModel";

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  id = "language-selector",
  defaultValue,
  options,
  onChange,
}) => {
  const {
    isOpen,
    selectedOption,
    selectRef,
    toggleDropdown,
    selectOption,
    handleKeyDown,
  } = LanguageSelectorViewModel({ defaultValue, options, onChange });

  return (
    <div
      id={id}
      ref={selectRef}
      className={`custom-select ${isOpen ? "open" : ""}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="select-display" onClick={toggleDropdown}>
        <span>{selectedOption?.label || defaultValue}</span>
      </div>
      <ul className={`select-options ${isOpen ? "show" : ""}`}>
        {options.map((option) => (
          <li
            key={option.value}
            data-value={option.value}
            className={selectedOption?.value === option.value ? "selected" : ""}
            onClick={() => selectOption(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
