import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPost from "../MenuPost/MenuPost";
import MenuCategoriesList from "../MenuCategories/MenuCategoriesList";
const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImages={false} />
      {/* Mid Section */}
      <h2 className={styles.subtitle}>{"Discover by topic"}</h2>
      <h1 className={styles.title}>Category</h1>
     <MenuCategoriesList/>
      {/* Editor section */}
      <h2 className={styles.subtitle}>{"Chosen by the editor"}</h2>
      <h1 className={styles.title}>Editors Pick</h1>

      <MenuPost withImages={true} />
    </div>
  );
};

export default Menu;
