import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button, useTheme } from "@pankod/refine-mui";
import { logo, yariga,logo1,yariga1 } from "assets";


export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();
  const actualTheme = useTheme().palette.mode;

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img
            src={logo1}
            className={actualTheme === "dark" ? "transform-white" : ""}
            alt="Refine"
            width="35px"
          />
        ) : (
          <img src={yariga1} alt="Refine" className={actualTheme === "dark" ? "transform-white" : ""} width="140px" />
        )}
      </Link>
    </Button>
  );
};
