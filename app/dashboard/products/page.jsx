import Image from "next/image";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/Search";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import styles from "@/app/ui/dashboard/products/products.module.css";
import { deleteProduct } from "@/app/lib/actions";
import { fetchProducts } from "@/app/lib/data";

export default async function Products() {
  const products = await fetchProducts();
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
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image src={product.img || "/noproduct.jpg"} width={40} height={40} alt="" className={styles.userImage} />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().slice(4,16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="text" hidden name="id" value={product._id} />
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                </div>
              </td>
            </tr>))}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
