import { Box, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { COLORS, CustomSize } from "../../../themes";
import WrapperComp from "../../../components/common/Wrapper/Wrapper";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import Logo from "../../../assets/images/about.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { styled } from "@mui/system";

const MotionBox = styled(motion(Box))``;

const ResumeSection = () => {
  const { isMobile, isTablet } = CustomSize();

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 2, delay: 0.2 },
        });
      } else {
        controls.start({
          opacity: 0,
          y: 500,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <WrapperComp title="CheckOut My Resume">
      <MotionBox
        initial={{ opacity: 0, y: -300 }}
        animate={controls}
        sx={{
          backgroundColor: COLORS.LIGHT_BROWN,
          minWidth: isMobile ? 250 : isTablet ? 500 : undefined,
          minHeight: 250,
          borderRadius: isMobile ? 10 : 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          m: 2,
        }}
      >
        <Box>
          <Box
            sx={{
              border: `1px solid ${COLORS.PRIMARY}`,
              width: 70,
              height: 70,
              borderRadius: 99,
              backgroundImage: `url(${Logo})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              mt: 2,
            }}
          />
        </Box>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ textShadow: "0px 4px 4px rgba(red, red, red, 1.15)" }}
          fontWeight={"bold"}
          color={COLORS.PRIMARY}
        >
          Siddharth Jain
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          textAlign={"center"}
          color={COLORS.WHITE}
          mt={2}
        >
          Fronted Developer/ Web Design / App Design
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={isMobile ? "column" : "row"}
        >
          <ChipWithIconComp
            stackProps={{ ml: isMobile ? 0 : 1, m: isMobile ? 2 : 2 }}
            chipProps={{
              sx: {
                mt: isMobile ? 3 : 5,
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.BLACK,
                height: isMobile ? 38 : 30,
                width: 120,
                borderRadius: 99,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: COLORS.PRIMARY,
                  border: `1px solid ${COLORS.PRIMARY}`,
                  cursor: "pointer",
                },
              },
            }}
            icon={<DownloadIcon color="inherit" />}
            label="Resume"
          />
          <ChipWithIconComp
            stackProps={{ ml: isMobile ? 0 : 1, m: isMobile ? 2 : 2 }}
            chipProps={{
              sx: {
                mt: isMobile ? 3 : 5,
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.BLACK,
                height: isMobile ? 38 : 30,
                width: 120,
                borderRadius: 99,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: COLORS.PRIMARY,
                  border: `1px solid ${COLORS.PRIMARY}`,
                  cursor: "pointer",
                },
              },
            }}
            label="Discuss Project"
          />
        </Box>
      </MotionBox>
    </WrapperComp>
  );
};

export default ResumeSection;
