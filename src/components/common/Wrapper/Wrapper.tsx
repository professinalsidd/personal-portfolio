import { Box, BoxProps, Container } from "@mui/material";
import TextComp from "../text/Text";
import { ReactNode } from "react";
import { COLORS, CustomSize } from "../../../themes";

type WrapperType = {
  children: ReactNode;
  container?: BoxProps;
  subContainer?: BoxProps;
  title: string;
};

const WrapperComp = ({
  children,
  container,
  subContainer,
  title,
}: WrapperType) => {
  const { isMobile } = CustomSize();
  return (
    <Box {...container}>
      <Container>
        <Box {...subContainer} mt={10}>
          <TextComp
            variant={isMobile ? "h4" : "h3"}
            sx={{ textAlign: "center", color: COLORS.PRIMARY }}
          >
            {title}
          </TextComp>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default WrapperComp;
