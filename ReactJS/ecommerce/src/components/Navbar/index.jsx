import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { AllRoutes } from '../../routes/allRoutes'
export function Navbar() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Link to={AllRoutes.home}>
                        <img className={styles.logo} src="/images/eCommerce.png" alt="logo" />
                    </Link>
                </div>
                <ul className={styles.ulContainer}>
                    <Link className={styles.link} to={AllRoutes.home}>Home</Link>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <div className={styles.picContainer}>
                    <Link className={styles.link} to={AllRoutes.cart}>Cart</Link>
                    <Link className={styles.link} to={AllRoutes.wishlist}>Wishlist</Link>
                </div>
            </div>
        </>
    )
}
