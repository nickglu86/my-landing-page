import * as React from "react";
import Container from "../container";

import * as styles from '../navbar/styles.module.scss';


const Navbar = () => {
   
  return (
    <div className={styles.navbar}>
        <Container size="large">
            <div className={styles.navbarInner}>
                <div className={styles.navbarLeft}>
                    <a className={styles.logo} href="#">MasterMind Solutions</a>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><a  href="#">About</a></li>
                            <li className={styles.listItem}><a  href="#">Services</a></li>
                            <li className={styles.listItem}><a  href="#">Projects</a></li>
                        </ul>
                </div>
                <a className={styles.cta} href="#">Contact</a>
            </div>
        </Container>
    </div>
  )
}

export default Navbar;
