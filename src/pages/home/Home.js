import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection'

// Compoenents
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

// styles
import styles from './Home.module.css';

const Home = () => {
  const { user } = useAuthContext()
  const { error, document } = useCollection(
    'transactions', 
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  )
  return (
    <div className={styles.container}>
        {/* C1 */}
        <div className={styles.content}>
          {error && <p>{error}</p>}
          {document && <TransactionList transactions={document} />}
        </div>
        {/* C2 */}
        <div className={styles.sidebar}>
          <TransactionForm uid={user.uid} />
        </div>
    </div>
  )
}

export default Home