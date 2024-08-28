import ContactInformation from "../components/about/ContactInformation";
import HistoryMilestones from "../components/about/HistoryMilestones";
import MissionStatement from "../components/about/MissionStatement";
import TeamSection from "../components/about/TeamSection";

const About = () => {
  return (
    <div>
      <MissionStatement />
      <TeamSection />
      <HistoryMilestones />
      <ContactInformation />
    </div>
  );
};

export default About;
