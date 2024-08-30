import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const COLORS = {
  PRIMARY: "#FDB800",
  LIGHT_BROWN: "#242424",
  WHITE: "#FFF",
  BLACK: "#333",
  LIGHT_BLUE_RGBA: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);",
  LIGHT_ORANGE_RGBA: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);",
};

export const CustomSize = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return { isDesktop, isMobile, isTablet };
};
