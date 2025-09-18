export interface LanguageOption {
  value: string;
  label: string;
}

export interface LanguageSelectorProps {
  id?: string;
  defaultValue?: string;
  options: LanguageOption[];
  onChange?: (value: string) => void;
}
