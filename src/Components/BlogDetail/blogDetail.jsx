
import React from "react";
import Header from "../layout/header";
import BlogBanner from "./blogBanner";
import BlogSlider from "./blogSlider";
import RecentArticles from "./recentArticles";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import BlogInfo from "./blogInfo";

const BlogDetail = () => {

  return (
    <>
     <Header />
     <BlogBanner />
     <BlogInfo />
     <BlogSlider />
     <Subscribe />
     <Footer />
    </>
  );
};

export default BlogDetail;
