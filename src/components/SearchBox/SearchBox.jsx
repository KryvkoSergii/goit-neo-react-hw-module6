import { useId } from "react";
import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

export default function SearchBox({ searchQuery, onSearchQuery }) {
  const id = useId();
  return (
    <div className={css.search_field}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} value={searchQuery} onChange={onSearchQuery} />
    </div>
  );
}

SearchBox.propTypes = {
  searchQuery: PropTypes.string,
  onSearchQuery: PropTypes.any,
};
