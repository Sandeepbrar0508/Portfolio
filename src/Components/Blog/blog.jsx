
import React from "react";
import Header from "../layout/header";
import BlogBanner from "./blogBanner";
import BlogSlider from "./blogSlider";
import RecentArticles from "./recentArticles";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";

const Blog = () => {

  return (
    <>
     <Header />
     <BlogBanner />
     <BlogSlider />
     <RecentArticles />
     <Subscribe />
     <Footer />
    </>
  );
};

export default Blog;
