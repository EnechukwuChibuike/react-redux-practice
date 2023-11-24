import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = () => {
  return (
    <div className={styles.singleItem}>
      <img className={styles.singleItem__image} src="" alt="" />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>This is some cube</p>
        <p className={styles.details__description}>
          This is the description for this cube
        </p>
        <p className={styles.details__price}>$ 15.00</p>

        <button className={styles.details__addBtn}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleItem;
