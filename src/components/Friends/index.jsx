import React from "react";
import styles from "./style.module.css";
import { Typography } from "../Typography";
import { useThemeContext } from "../../context/ThemeContext";
import { THEMES } from "../../constants";

const Friends = () => {
  const { theme } = useThemeContext();
  return (
    <div className={styles.div}>
      <Typography variant={"h3"}>friends</Typography>
      <img
        src={
          theme !== THEMES.LIGHT
            ? "/assets/images/friends-light.png"
            : "/assets/images/friends-dark.png"
        }
        alt=""
      />
    </div>
  );
};

export default Friends;
