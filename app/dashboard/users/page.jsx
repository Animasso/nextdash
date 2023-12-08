import React from "react";
import styles from "./users.module.css";
import Search from "../search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../pagination/pagination";
const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search searchName={"user"} />
        <Link href={"/dashboard/users/add"}>
          <button className={styles.addbutton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                John Doe{" "}
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            <td>21/12/2023</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                {" "}
                <Link href={"/"}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View{" "}
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete{" "}
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserPage;
