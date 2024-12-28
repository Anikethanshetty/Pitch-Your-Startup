import { X } from "lucide-react";

export const SearchFormReset = ({ onReset }: { onReset: () => void }) => {
  return (
    <button
      type="button"
      onClick={onReset}
      className="search-btn text-white"
    >
      <X className="size-7"/>
    </button>
  );
};
