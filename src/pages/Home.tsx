import { useEffect, useState } from "react";
import FeaturedFacilities from "../components/FeaturedFacilities";
import HeroSection from "../components/HeroSection";
import HowToWork from "../components/HowToWork";
import UserFeedback from "../components/UserFeedback";
import { Button } from "antd";
import { UpOutlined } from "@ant-design/icons";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div>
      <HeroSection />
      <FeaturedFacilities />
      <HowToWork />
      <UserFeedback />
      <div className="scroll-to-top">
        {visible && (
          <Button
            type="primary"
            // shape="circle"
            icon={<UpOutlined />}
            size="large"
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
              zIndex: 1000,
            }}
          >
            Scroll to Top
          </Button>
        )}
      </div>
      <NewsLetter />
    </div>
  );
};

export default Home;
