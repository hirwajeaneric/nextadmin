import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/Chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import Transactions from "../ui/dashboard/transactions/Transactions";

export default function Dashboard() {
  const items = [
    {
      title: "Total Sales",
      number: "$124,567",
      change: 12,
    },
    {
      title: "Total Sales",
      number: "$124,567",
      change: 12,
    },
    {
      title: "Total Sales",
      number: "$124,567",
      change: 12,
    },
  ]
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {items && items.map((item, index) => (<Card key={item.title} item={item} />))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}