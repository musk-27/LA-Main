import Link from "next/link";
import React from "react";

const MainMenu = (title, path) => {
  <div className="">
    <Link href={path}>{title}</Link>
  </div>;
};

export default MainMenu;
