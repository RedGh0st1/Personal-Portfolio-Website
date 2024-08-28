import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

const Github: React.FC = () => {
  // const customTheme = {
  //   light: ["#f0f0f0", "#e2e2e2", "#d4d4d4", "#c6c6c6", "#b8b8b8"],
  // };

  return (
    <div className="github--calendar--container">
      <h3 className="github--activity">My Github Contributions</h3>
      <GitHubCalendar
        username="RedGh0st1"
        colorScheme="light"
        blockSize={15}
        blockMargin={4}
        fontSize={16}
        // theme={customTheme}
      />
    </div>
  );
};

export default Github;
