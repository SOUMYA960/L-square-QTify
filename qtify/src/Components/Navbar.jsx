import React from "react";
import Button from "./Button";
import styles from "./Navbar.module.css";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a album of your choice" />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
