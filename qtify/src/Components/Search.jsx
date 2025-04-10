import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../assets/Search.svg";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} />
      <button className={styles.button}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
