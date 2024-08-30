import { Box, Grid, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { COLORS, CustomSize } from "../../../themes";
import Logo from "../../../assets/images/about.png";
import WrapperComp from "../../../components/common/Wrapper/Wrapper";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import ButtonComp from "../../../components/common/button/Button";
import { aboutContent, description, hobbies } from "../../../constant/constant";
import { calculateExperience } from "../../../utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { styled } from "@mui/system";

const MotionBox = styled(motion(Box))``;
const MotionTypography = styled(motion(Typography))``;

const AboutSection = () => {
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
    <WrapperComp title="About">
      <Grid spacing={0} mt={isMobile ? 2 : 5} container>
        <Grid xs={12} md={6} p={5}>
          <Box
            display={"flex"}
            justifyContent={
              isMobile ? "center" : isTablet ? "center" : undefined
            }
            alignItems={"center"}
          >
            <Box
              sx={{
                border: `1px solid ${COLORS.WHITE}`,
                width: 50,
                height: 50,
                borderRadius: 99,
                backgroundImage: `url(${Logo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <MotionTypography
              ml={isMobile ? 1 : 3}
              variant={isMobile ? "h5" : "h4"}
              color={COLORS.PRIMARY}
            >
              I Love
            </MotionTypography>
          </Box>
          <MotionBox
            animate={controls}
            initial={{ opacity: 0, y: -100 }}
            display={"flex"}
            flexDirection={isMobile ? "column" : "row"}
            justifyContent={isMobile ? "center" : undefined}
            alignItems={isMobile ? "center" : "center"}
            sx={{
              flexWrap: isMobile ? undefined : "wrap",
              // width: isMobile ? 0 : isTablet ? 0 : 380,
            }}
          >
            {hobbies.map(
              (item: { icon: any; label: string; color: string }) => (
                <ChipWithIconComp
                  key={item.label}
                  icon={
                    <i className={item.icon} style={{ color: item.color }} />
                  }
                  label={item.label}
                  stackProps={{ mt: 2, ml: isMobile ? 0 : 1 }}
                  chipProps={{
                    sx: {
                      backgroundColor: COLORS.WHITE,
                      p: 2,
                    },
                  }}
                />
              )
            )}
          </MotionBox>
        </Grid>
        <Grid xs={12} md={6}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {aboutContent.map(
              (item: {
                label?: string;
                expSuffix?: string;
                startDate?: string;
                projects?: number;
                proSuffix?: string;
              }) => (
                <Box
                  key={item.label}
                  sx={{
                    backgroundColor: COLORS.LIGHT_BROWN,
                    width: isMobile ? 100 : 200,
                    height: isMobile ? 100 : 200,
                    borderRadius: isMobile ? 10 : 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    m: isMobile ? 1 : 2,
                  }}
                >
                  <MotionTypography
                    animate={controls}
                    initial={{ opacity: 0, y: 100 }}
                    variant={isMobile ? "subtitle2" : "h5"}
                    sx={{ textShadow: "0px 4px 4px rgba(red, red, red, 1.15)" }}
                    fontWeight={"bold"}
                    color={COLORS.PRIMARY}
                  >
                    {item.startDate &&
                      `${calculateExperience(item.startDate)}${item.expSuffix}`}
                    {item.projects && `${item.projects}${item.proSuffix}`}
                  </MotionTypography>
                  <MotionTypography
                    variant={isMobile ? "subtitle2" : "h5"}
                    color={COLORS.WHITE}
                  >
                    {item.label}
                  </MotionTypography>
                </Box>
              )
            )}
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.LIGHT_BROWN,
            p: isMobile ? 1.5 : 2,
            borderRadius: 5,
            width: isMobile ? 250 : 1200,
          }}
        >
          <MotionTypography
            animate={controls}
            initial={{ opacity: 0, y: 300 }}
            variant={isMobile ? "subtitle2" : "subtitle1"}
            color={COLORS.WHITE}
            sx={{ fontWeight: "300" }}
          >
            {description.des}
          </MotionTypography>
        </Box>
      </Box>
      <MotionBox
        initial={{ opacity: 0, x: 0 }}
        animate={controls}
        display={"flex"}
        mt={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <ButtonComp
          customWidth={180}
          customHeight={50}
          customBorderRadius={50}
          sx={{ color: COLORS.PRIMARY }}
        >
          <DownloadIcon />
          Contact ME
        </ButtonComp>
      </MotionBox>
    </WrapperComp>
  );
};

export default AboutSection;
