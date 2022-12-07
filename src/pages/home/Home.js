// styles
import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import { usefirestore } from '../../hooks/useFirestore';

const Home = () => {
  return (
    <div className={styles.container}>
        {/* C1 */}
        <div className={styles.content}>

        </div>
        {/* C2 */}
        <div className={styles.sidebar}>
          <TransactionForm />
        </div>
    </div>
  )
}

export default Home