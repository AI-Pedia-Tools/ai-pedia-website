import React, { useEffect } from "react";
import Collection_category from "../../components/collectrions/collection_category";
import {
  NewseLatter,
  Feature_collections,
  Partners,
  Browse_category,
  Hero_3,
} from "../../components/component";
import Meta from "../../components/Meta";

const Home_3 = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("bg-white/[.15]");
  }, []);

  return (
    <>
      <Meta title="Home 3" />
      <Hero_3 />
      <Browse_category />
      <Collection_category />
      <Feature_collections bgWhite={true} />
      <NewseLatter bgWhite={false} />
      <Partners />
    </>
  );
};

export default Home_3;
