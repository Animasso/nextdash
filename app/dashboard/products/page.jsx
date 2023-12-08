import React from "react";
import styles from "./products.module.css";
import Search from "../search/search";
import Link from "next/link";
import Pagination from "../pagination/pagination";
import Image from "next/image";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search searchName={"product"} />
        <Link href={"/dashboard/products/add"}>
          <button className={styles.addbutton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Create At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noproduct.jpg"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                Samsung{" "}
              </div>
            </td>
            <td>New Super Uper Duper Duper phone</td>
            <td>$1034</td>
            <td>3/12/2023</td>
            <td>21</td>
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
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noproduct.jpg"}
                  alt="avatar"
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                Iphone{" "}
              </div>
            </td>
            <td>New Super Uper Duper phone</td>
            <td>$1234</td>
            <td>21/12/2023</td>
            <td>23</td>
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

export default ProductPage;
