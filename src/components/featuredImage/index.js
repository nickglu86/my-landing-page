import * as React from "react";
import Container from "../container";

import landingPageImg from "../../images/landing-page.png"

import * as styles from '../featuredImage/styles.module.scss';

const FeaturedImage = () => {
  
  return (
    <div className={styles.featuredImage}>
      <Container size="medium">
        <img src={landingPageImg} alt="random" />
      </Container>
    </div>
  )
}

export default FeaturedImage;
