import "./Footer.css";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.svg" alt="Logoipsum" />
        </div>
        <div className="footer--copyright">
          <p>Copyright © {year} Lennie Nurse. All rights reserved.</p>
        </div>

        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://github.com/RedGh0st1"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 16 16"
                  fill="black"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@LennieNurse"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="red"
                >
                  <path d="M23.498 6.174a2.967 2.967 0 00-2.087-2.098C19.588 3.5 12 3.5 12 3.5s-7.588 0-9.411.576A2.967 2.967 0 00.502 6.174 29.919 29.919 0 000 12a29.919 29.919 0 00.502 5.826 2.967 2.967 0 002.087 2.098C4.412 20.5 12 20.5 12 20.5s7.588 0 9.411-.576a2.967 2.967 0 002.087-2.098A29.919 29.919 0 0024 12a29.919 29.919 0 00-.502-5.826zM9.546 15.568V8.432L15.818 12l-6.272 3.568z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 448 512"
                  fill="none"
                >
                  <linearGradient
                    id="IG-gradient"
                    x1="32%"
                    y1="0%"
                    x2="67%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#f58529" />
                    <stop offset="25%" stop-color="#dd2a7b" />
                    <stop offset="50%" stop-color="#8134af" />
                    <stop offset="100%" stop-color="#515bd4" />
                  </linearGradient>
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7s32.1-71.7 71.7-71.7 71.7 32.1 71.7 71.7-32.1 71.7-71.7 71.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9h-29.1c-14.9 0-26.9-12-26.9-26.9v-29.1c0-14.9 12-26.9 26.9-26.9h29.1c14.9 0 26.9 12 26.9 26.9v29.1zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.6-26.3-26.3-57.9-34.5-93.6-36.2-37-2.1-148.2-2.1-185.2 0-35.7 1.7-67.3 9.9-93.6 36.2s-34.5 57.9-36.2 93.6c-2.1 37-2.1 148.2 0 185.2 1.7 35.7 9.9 67.3 36.2 93.6 26.3 26.3 57.9 34.5 93.6 36.2 37 2.1 148.2 2.1 185.2 0 35.7-1.7 67.3-9.9 93.6-36.2 26.3-26.3 34.5-57.9 36.2-93.6 2.1-37 2.1-148.2 0-185.2zm-48.8 228.9c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.6-99.4 8.9-132.2 8.9s-102.7 2.6-132.2-8.9c-19.6-7.8-34.7-22.9-42.5-42.5-11.6-29.4-8.9-99.4-8.9-132.2s-2.6-102.7 8.9-132.2c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.6 99.4-8.9 132.2-8.9s102.7-2.6 132.2 8.9c19.6 7.8 34.7 22.9 42.5 42.5 11.6 29.4 8.9 99.4 8.9 132.2s2.7 102.7-8.9 132.2z"
                    fill="url(#IG-gradient)"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="#1DA1F2"
                >
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.86 9.86 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482 13.942 13.942 0 01-10.125-5.138 4.822 4.822 0 001.524 6.574 4.901 4.901 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.946 4.89a4.902 4.902 0 01-2.224.085c.627 1.956 2.444 3.379 4.604 3.419A9.867 9.867 0 010 19.54a13.914 13.914 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 448 512"
                  fill="#0077B5"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-344a53.26 53.26 0 1 1 53.26-53.25 53.22 53.22 0 0 1-53.22 53.24zm384 344h-92.88V302.4c0-34.7-12.4-58.4-43.24-58.4-23.58 0-37.6 15.9-43.74 31.3-2.25 5.4-2.82 12.9-2.82 20.5V448h-92.88s1.2-239.2 0-264h92.88v37.4c12.3-19 34.36-46 83.42-46 60.86 0 106.38 39.7 106.38 125.1V448z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer--content--container">
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
