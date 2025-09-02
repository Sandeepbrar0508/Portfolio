import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import PrivacyBanner from "./privacyBanner";
import PrivacyData from "./privacyData";

const Privacy = () => {

  return (
    <>
     <Header />
     <PrivacyBanner />
     <PrivacyData />
     <Subscribe />
     <Footer />
    </>
  );
};

export default Privacy;
