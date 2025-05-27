import Link from 'next/link'
import styles from '../styles/Navbar.module.css';

export default function Navbar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                DevNest 🐣
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/developers">Developers</Link></li>
            </ul>
        </nav>
    );
}