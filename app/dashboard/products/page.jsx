import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/Search";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import styles from "@/app/ui/dashboard/products/products.module.css";

export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noproduct.jpg" width={40} height={40} alt="" className={styles.userImage} />
                IPhone
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, perspiciatis vitae et distinctio aut optio tempore molestias corporis repellendus magni veritatis! Nemo quidem eos officia commodi, voluptas eligendi! Beatae, animi.</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/1">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
