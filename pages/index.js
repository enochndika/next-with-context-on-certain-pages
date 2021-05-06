import styles from "../styles/Home.module.css";
import { CountProvider, useCount } from "../components/context";

export default function Home() {
  const { increment, count, decrement } = useCount();
  return (
    <div className={styles.container}>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

Home.provider = CountProvider;
