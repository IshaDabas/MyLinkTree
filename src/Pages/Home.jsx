import "../Styles/Home.scss";
import { FaGithub, FaLinkedin, FaDiscord, FaGlobe } from "react-icons/fa";
import avatar from "../assets/avatar.JPG";

const links = [
  { name: "Github", icon: <FaGithub />, url: "https://github.com/IshaDabas" },
  {
    name: "Portfolio",
    icon: <FaGlobe />,
    url: "https://isha-dabas.vercel.app/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/iamishadabas/",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    url: "https://discordapp.com/users/803327816603140147",
  },
];

const Home = () => {
  return (
    <>
      <div className="home">
        <header className="header">
          <img className="profile-pic" src={avatar} alt="Profile" />
        </header>
        <div className="link-container">
          {links.map((link, index) => (
            <a
              className="link-card"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="icon">{link.icon}</div>
              <span className="text">{link.name}</span>
              <div className="dots">⋮</div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
