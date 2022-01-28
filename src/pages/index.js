import * as React from "react";

import Navbar from "../components/navbar";
import IntroBlock from "../components/introBlock";


import "../sass/basics.scss";
import FeaturedImage from "../components/featuredImage";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <>
         <Navbar />
         <IntroBlock />
         <FeaturedImage />
         <Footer />
    </>

  )
}

export default IndexPage
