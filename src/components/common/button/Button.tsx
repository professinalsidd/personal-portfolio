import { Button, ButtonProps } from "@mui/material";
import React from "react";
import { COLORS, CustomSize } from "../../../themes";

type ButtonCompProps = {
  customWidth?: number | string;
  customHeight?: number | string;
  customBorderRadius?: number;
} & ButtonProps;

const ButtonComp: React.FC<ButtonCompProps> = ({
  customWidth = 150,
  customHeight,
  customBorderRadius = 99,
  children,
  sx,
  ...props
}) => {
  const { isMobile } = CustomSize();

  return (
    <Button
      sx={{
        color: COLORS.PRIMARY,
        border: `1px solid ${COLORS.PRIMARY}`,
        height: customHeight || (isMobile ? 38 : 50),
        width: customWidth,
        borderRadius: customBorderRadius,
        "&:hover": {
          backgroundColor: COLORS.PRIMARY,
          color: COLORS.BLACK,
          border: "none",
          cursor: "pointer",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonComp;
