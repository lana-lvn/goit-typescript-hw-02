import { useState, FormEvent, FC } from "react";
import s from "./searchBar.module.css";
import { GoSearch } from "react-icons/go";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSearch: (newQuery: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.trim()) {
      return toast.error("Enter a valid query, please");
    }

    onSearch(value);
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.input}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button className={s.search} type="submit">
          <GoSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
