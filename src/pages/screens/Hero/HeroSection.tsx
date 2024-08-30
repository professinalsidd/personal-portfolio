import { Box, Typography } from "@mui/material";
import NavBarComp from "../../../components/navbar/Navbar";
import { COLORS, CustomSize } from "../../../themes";
import { heroSectionData } from "../../../constant/constant";
import { calculateExperience } from "../../../utils";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

const MotionTypography = styled(motion(Typography))``;
const MotionBox = styled(motion(Box))``;

const HeroSection = () => {
  const { isMobile, isTablet } = CustomSize();
  return (
    <MotionBox sx={{ mt: isMobile ? 10 : 15 }}>
      <NavBarComp />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={5}
        sx={{
          backgroundImage: `url(${heroSectionData.abstractImagePath})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MotionTypography
          initial={{ y: -90, opacity: 0 }}
          animate={{
            y: 0.2,
            opacity: 1,
            transition: { delay: 0.2, duration: 2 },
          }}
          variant={isMobile ? "h6" : "h3"}
          fontWeight={"bold"}
          color={"white"}
        >
          ✌🏻Hello! I'm{" "}
          <span style={{ color: COLORS.PRIMARY }}>{heroSectionData.name}</span>
        </MotionTypography>
        <MotionTypography
          initial={{
            x: -90,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 2 },
          }}
          mt={2}
          textAlign={isMobile ? "center" : undefined}
          variant={isMobile ? "subtitle1" : "h5"}
          color={"white"}
        >
          A <span style={{ fontWeight: "bold" }}>{heroSectionData.title}</span>
        </MotionTypography>
        <MotionTypography
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2, duration: 2 },
          }}
          mt={2}
          variant={isMobile ? "subtitle2" : "h6"}
          color={"white"}
        >
          with{" "}
          <span
            style={{
              color: COLORS.PRIMARY,
              backgroundColor: COLORS.LIGHT_BROWN,
              width: 50,
              height: 50,
              padding: "5px 18px",
              borderRadius: 99,
              fontWeight: "900",
            }}
          >
            {calculateExperience(heroSectionData.startDate)} years
          </span>{" "}
          Experience
        </MotionTypography>
        <MotionBox
          initial={{ opacity: 0, scaleX: -1 }}
          animate={{
            opacity: 1,
            scaleX: 1,
            transition: { delay: 0.2, duration: 2 },
          }}
          mt={4}
          display={"flex"}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems={"center"}
          width={"18%"}
        >
          <ChipWithIconComp
            stackProps={{ mr: isMobile ? 0 : 1 }}
            icon={
              <i
                className="fa-solid fa-download"
                style={{ color: COLORS.WHITE }}
              ></i>
            }
            chipProps={{
              sx: {
                color: COLORS.PRIMARY,
                border: `1px solid ${COLORS.PRIMARY}`,
                height: isMobile ? 38 : 50,
                width: 150,
                borderRadius: 99,
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.WHITE,
                  border: "none",
                  cursor: "pointer",
                },
              },
            }}
            label={heroSectionData.resumeButtonText}
          />
          <ChipWithIconComp
            stackProps={{ ml: isMobile ? 0 : 1, mt: isMobile ? 2 : 0 }}
            chipProps={{
              sx: {
                mt: isMobile ? 3 : undefined,
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.BLACK,
                height: isMobile ? 38 : 50,
                width: 150,
                borderRadius: 99,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: COLORS.PRIMARY,
                  border: `1px solid ${COLORS.PRIMARY}`,
                  cursor: "pointer",
                },
              },
            }}
            label={heroSectionData.hireMeButtonText}
          />
        </MotionBox>
        <Box mt={5} mb={1}>
          <motion.img
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 2 },
            }}
            src={heroSectionData.imagePath}
            alt="hero"
            style={{
              width: isMobile ? 290 : isTablet ? 500 : 800,
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </MotionBox>
  );
};

export default HeroSection;
