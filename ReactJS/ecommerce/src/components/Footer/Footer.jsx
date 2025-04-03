import styles from './Footer.module.css'
function Footer(){
    let now = new Date();
    let currentYear = now.getFullYear()
    return(
        <>
            <div className={styles.container}>
                <p>
                    &copy; me and you shop {currentYear}
                </p>
            </div>
        </>
    )
}
export default Footer;