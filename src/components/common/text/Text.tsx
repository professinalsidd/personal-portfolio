import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";
import { COLORS } from "../../../themes";

type TextType = {
  children: ReactNode;
  style?: React.CSSProperties;
} & TypographyProps;

const TextComp = ({ children, style, ...props }: TextType) => {
  return (
    <Typography
      variant="h3"
      sx={{
        color: COLORS.WHITE,
        fontWeight: "600",
        lineHeight: 1.2,
        wordSpacing: 0.3,
        ...style,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default TextComp;
