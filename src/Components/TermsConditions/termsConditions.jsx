import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import TermsConditionsBanner from "./termsConditionsBanner";
import TermsConditionsData from "./termsConditionsData";

const TermsConditions = () => {

  return (
    <>
     <Header />
     <TermsConditionsBanner />
     <TermsConditionsData />
     <Subscribe />
     <Footer />
    </>
  );
};

export default TermsConditions;
