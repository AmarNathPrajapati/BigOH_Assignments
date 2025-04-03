import styles from './Navbar.module.css'
function Navbar() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src="/images/eCommerce.png" alt="logo" />
                </div>
                <ul className={styles.ulContainer}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
                <div className={styles.picContainer}>
                    <span>Cart</span>
                    <span>Wishlist</span>
                </div>
            </div>
        </>
    )
}
export default Navbar;