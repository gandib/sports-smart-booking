import ContactInformation from "../components/ContactInformation";
import HistoryMilestones from "../components/HistoryMilestones";
import MissionStatement from "../components/MissionStatement";
import TeamSection from "../components/TeamSection";

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
