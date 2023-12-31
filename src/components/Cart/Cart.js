import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        <CartItem />
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: items)</span>
          <span>$ </span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
