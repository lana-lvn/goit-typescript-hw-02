import { useState } from "react";
import s from "./searchBar.module.css";
import { GoSearch } from "react-icons/go";
import toast from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      return toast.error('Enter a valid query, please');
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
    <button className={s.search} type="submit"><GoSearch /></button>
  </form>
</header>
  )
}

export default SearchBar






