import FeaturedFacilities from "../components/FeaturedFacilities";
import HeroSection from "../components/HeroSection";
import HowToWork from "../components/HowToWork";
import UserFeedback from "../components/UserFeedback";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedFacilities />
      <HowToWork />
      <UserFeedback />
    </div>
  );
};

export default Home;
