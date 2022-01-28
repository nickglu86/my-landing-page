import * as React from "react";
import Container from "../container";

import * as styles from '../footer/styles.module.scss';


const Footer = () => {
   
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        <Container size="large">
            <div className={styles.footerInner}>
                <p>&copy; MasterMind Solutions - {year} </p>
                <p><a href="https://nickglu86.github.io/">Made by NickGlu86</a></p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer;
