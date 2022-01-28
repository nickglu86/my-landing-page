import * as React from "react";
import Container from "../container";

import * as styles from '../introBlock/styles.module.scss';

const IntroBlock = () => {
   
  return (
    <div className={styles.introBlock}>
      <Container size="small">
          <h1 className={styles.introBlockTitle}> 
              <span>Business Web Sites</span> development for you <span>online business</span>
          </h1>
          <a className={styles.cta} href="/">Get in touch</a>
      </Container>
    </div>
  )
}

export default IntroBlock;
