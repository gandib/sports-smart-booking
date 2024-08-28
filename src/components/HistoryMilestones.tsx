const HistoryMilestones = () => {
  const milestones = [
    { year: "2010", event: "Company founded" },
    { year: "2012", event: "First major product launch" },
    { year: "2015", event: "Reached 1 million users" },
    { year: "2020", event: "Expanded to international markets" },
    // Add more milestones as needed
  ];
  return (
    <div
      style={{ marginLeft: "25%", marginRight: "25%", marginBottom: "20px" }}
    >
      <div>
        <h2>Our History & Milestones</h2>
        <div>
          {milestones.map((milestone, index) => (
            <p key={index} style={{ fontSize: "18px" }}>
              <strong>{milestone.year}</strong>: {milestone.event}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryMilestones;
