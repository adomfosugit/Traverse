import Banner from './components/Banner';
import Countries from './components/Countries';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WayYouBuild from './components/WayYouBuild';
import WhoWeAre from './components/WhoWeAre';
import WhyTraverse from './components/WhyTraverse';

const Home = () => {
  return (
    <div className="overflow-hidden w-screen max-w-[3000px] mx-auto">
      <Banner />
      <WhoWeAre />
      <WhyTraverse />
      <WayYouBuild />
      <Countries />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
