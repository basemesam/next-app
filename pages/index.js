import React, { useState, useEffect } from "react";
import HomeStyles from "../styles/Home.module.css";
import ArticleLists from "../Components/ArticleLists";

export default function Home({ articles }) {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let SIDEBAR = [HomeStyles.sidebar];
  if (scrolled) {
    SIDEBAR.push(HomeStyles.scrolled);
  }

  return (
    <div className={HomeStyles.home}>
      <div className={SIDEBAR.join(" ")}></div>
      <ArticleLists articles={articles} />
      <div className={SIDEBAR.join(" ")}></div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://80.240.21.204:1337/news?skip=12&limit=10`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
};
