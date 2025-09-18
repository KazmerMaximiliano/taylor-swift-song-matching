import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageOption } from "./LanguageSelector.types";

interface LanguageSelectorViewModelProps {
  defaultValue?: string;
  options: LanguageOption[];
  onChange?: (value: string) => void;
}

export const LanguageSelectorViewModel = ({
  defaultValue,
  options,
  onChange,
}: LanguageSelectorViewModelProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState<LanguageOption | null>(
    () => {
      const currentLang = i18n.language;
      const currentOption = options.find(
        (option) => option.value === currentLang
      );
      return (
        currentOption ||
        (defaultValue
          ? options.find((option) => option.label === defaultValue) ||
          options[0]
          : options[0])
      );
    }
  );

  const selectRef = useRef<HTMLDivElement>(null);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const selectOption = (option: LanguageOption) => {
    setSelectedOption(option);

    i18n.changeLanguage(option.value);

    if (onChange) {
      onChange(option.value);
    }

    closeDropdown();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDropdown(event as any);
    } else if (event.key === "Escape" && isOpen) {
      closeDropdown();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return {
    isOpen,
    selectedOption,
    selectRef,
    toggleDropdown,
    selectOption,
    handleKeyDown,
    options,
  };
};
