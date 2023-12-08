import React from "react";
import styles from "./addUser.module.css";
const AddUser = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="adress"
          id="adress"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
