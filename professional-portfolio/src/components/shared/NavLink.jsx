import React, { useState } from "react";
import { Anchor } from "antd";


const NavLink = () => {
const [isLightSection, setLightSection] = useState(false);

const triggerFlag = (section) => {
  switch (section) {
    case "#hero-1":
      setLightSection(false);
      break;

    case "#hero-2":
      setLightSection(true);
      break;

    case "#hero-3":
      setLightSection(false);
      break;
    case "#hero-4":
      setLightSection(true);
    default:
      break;
  }
};

  return (
    <div className={`hero-nav ${isLightSection ? "dark" : "light"}`}>
      <Anchor
        onChange={triggerFlag}
        direction="vertical"
        items={[
          {
            key: "part-1",
            href: "#hero-1",
            title: "Home",
          },
          {
            key: "part-2",
            href: "#hero-2",
            title: "About",
          },
          {
            key: "part-3",
            href: "#hero-3",
            title: "Projects",
          },
          {
            key: "part-4",
            href: "#hero-4",
            title: "Portfolio",
          }
        ]}
      />
    </div>
  );
};

export default NavLink;