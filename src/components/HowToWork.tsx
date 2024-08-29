import { Steps } from "antd";
import { useState } from "react";

const HowToWork = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  return (
    <>
      <h1 style={{ margin: "20px 0 5px 0" }}>How It Works</h1>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            title: "Step 1",
            subTitle: "Go to Facility page",
            status: "process",
            description:
              "Click the View Details button to see more details and for booking. Click to the Book Now button for next step.",
          },
          {
            title: "Step 2",
            subTitle: "Fillup time",
            status: "process",
            description:
              "Pick a date and check available time slots by clicking Check Availability button. Then fillup start and end time. Click Proceed to Pay button.",
          },
          {
            title: "Step 3",
            subTitle: "Show booking summary",
            status: "process",
            description:
              "After click to the Proceed to Pay button, it will check if you logged in or not, if not, it will redirect you to Login page. Please complete your login process. Otherwise it redirects you to Payment page.",
          },
          {
            title: "Step 4",
            subTitle: "Payment",
            status: "wait",
            description:
              "You can see the summary and Pay button. Click to the button and create your payment.",
          },
        ]}
      />
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: "process",
            title: "Step 1",
          },
          {
            status: "process",
            title: "Step 2",
          },
          {
            status: "wait",
            title: "Step 3",
          },
          {
            status: "wait",
            title: "Step 4",
          },
        ]}
      />
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps"
        items={[
          {
            status: "finish",
            title: "finish 1",
          },
          {
            status: "finish",
            title: "finish 2",
          },
          {
            status: "process",
            title: "finish 3",
          },
          {
            status: "wait",
            title: "wait",
            disabled: true,
          },
        ]}
      />
    </>
  );
};

export default HowToWork;
