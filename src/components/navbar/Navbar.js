import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
// styles
import styles from './Navbar.module.css'

const Navbar = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>My Money</li>

            {user == null ? (<>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>) : (<>
              <li className='display-name'>Hello, {user.displayName}</li>
              <li>
                <button className='btn' onClick={logout}>Logout</button>
              </li>
            </>)
            }
        </ul>
    </nav>
  )
}

export default Navbar