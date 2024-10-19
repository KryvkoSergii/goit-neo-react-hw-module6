import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from 'react-redux';
import { changeFilter } from "../../redux/filtersSlice"

export default function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();
  const onSearchQuery = (event) => dispatch(changeFilter(event.target.value))
  return (
    <div className={css.search_field}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} onChange={onSearchQuery} />
    </div>
  );
}