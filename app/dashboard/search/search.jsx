import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

const Search = ({ searchName }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={`Search for a ${searchName}`}
        className={styles.input}
      />
    </div>
  );
};

export default Search;
