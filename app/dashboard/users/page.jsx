import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from '@/app/ui/dashboard/search/Search';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import { deleteUser } from '@/app/lib/actions';
import { fetchUsers } from '@/app/lib/data';

export default async function UsersPage({ searchParams }) {
  const q = searchParams?.q || "";
  const users = await fetchUsers(q);
  
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
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
          {users.map((user) => (
            <tr key={user._id}>
            <td>
              <div className={styles.user}>
                <Image src={user.img || "/noavatar.png"} width={40} height={40} alt="" className={styles.userImage} />
                {user.username}
              </div>
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4, 16)}</td>
            <td>{user.isAdmin ? "Admin" : "Client"}</td>
            <td>{user.isActive ? "Active" : "Inactive"}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user._id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <form action={deleteUser}>
                    <input type="text" hidden name="id" value={user._id} />
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
