import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";
const Github: React.FC = () => (
  <div className="github--calendar--container">
    <h3 className="github--activity">My Github Contributions</h3>
    <GitHubCalendar
      username="RedGh0st1"
      colorScheme="light"
      blockSize={15}
      blockMargin={4}
      fontSize={16}
    />
  </div>
);
export default Github;

// import React from "react";
// import GitHubCalendar from "react-github-calendar";
// import "./Github.css";

// const Github: React.FC = () => {
//   const customTheme = {
//     background: "transparent",
//     text: "#000", // Text color for the contribution graph
//     grade4: "#216e39", // Color for the highest level of contributions
//     grade3: "#30a14e", // Color for the second-highest level
//     grade2: "#40c463", // Color for the middle level
//     grade1: "#9be9a8", // Color for the lowest level
//     grade0: "#ebedf0", // Color for no contributions
//   };

//   return (
//     <div className="github--calendar--container">
//       <h3 className="github--activity">My GitHub Contributions</h3>
//       <GitHubCalendar
//         username="RedGh0st1"
//         colorScheme="light"
//         blockSize={15}
//         blockMargin={4}
//         fontSize={16}
//         theme={customTheme} // Apply custom theme
//       />
//     </div>
//   );
// };

// export default Github;
