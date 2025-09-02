import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import SolutionDocsBanner from "./solutionDocsBanner";
import SolutionDocsData from "./solutionDocsData";

const SolutionDocs = () => {

  return (
    <>
     <Header />
     <SolutionDocsBanner />
     <SolutionDocsData />
     <Subscribe />
     <Footer />
    </>
  );
};

export default SolutionDocs;
