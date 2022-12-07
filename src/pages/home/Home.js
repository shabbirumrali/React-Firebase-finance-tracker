import { useAuthContext } from '../../hooks/useAuthContext';

// Compoenents
import TransactionForm from './TransactionForm';

// styles
import styles from './Home.module.css';

const Home = () => {
  const { user } = useAuthContext()
  return (
    <div className={styles.container}>
        {/* C1 */}
        <div className={styles.content}>

        </div>
        {/* C2 */}
        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid} />
        </div>
    </div>
  )
}

export default Home