import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

const Github: React.FC = () => {
  //
  const customTheme: { light: string[] } = {
    light: ["#e0e0e0", "#b0b0b0", "#808080", "#505050", "#ff0000"],
  };

  return (
    <div className="github--calendar--container">
      <h3 className="github--activity">My Github Contributions</h3>
      <GitHubCalendar
        username="RedGh0st1"
        colorScheme="light"
        blockSize={15}
        blockMargin={4}
        fontSize={16}
        theme={customTheme}
      />
    </div>
  );
};

export default Github;
