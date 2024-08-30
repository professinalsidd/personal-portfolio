import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import WrapperComp from "../../../components/common/Wrapper/Wrapper";
import { COLORS, CustomSize } from "../../../themes";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
  useEffect,
} from "react";
import { experienceData } from "../../../constant/constant";
import { motion, useAnimation } from "framer-motion";
import { styled } from "@mui/system";

const MotionTypography = styled(motion(Typography))``;
const MotionBox = styled(motion(Box))``;

const ExperienceSection = () => {
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
          y: -500,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <WrapperComp title="Experience">
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {experienceData.map((experience, index) => {
          const bgClr =
            index % 2 === 0 ? COLORS.LIGHT_BLUE_RGBA : COLORS.LIGHT_ORANGE_RGBA;
          const renderDetails = (details: any[]) => (
            <>
              {details.map(
                (
                  detail:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined,
                  detailIndex: Key | null | undefined
                ) => (
                  <Box
                    key={detailIndex}
                    display={"flex"}
                    mt={2}
                    alignItems={"center"}
                  >
                    <KeyboardDoubleArrowRightIcon />
                    <Typography ml={2}>{detail}</Typography>
                  </Box>
                )
              )}
            </>
          );

          return (
            <MotionBox
              initial={{ opacity: 0, y: 500 }}
              animate={controls}
              key={index}
              sx={{
                borderRadius: 3,
                p: isMobile ? 1 : 3,
                background: bgClr,
                mt: 5,
                width: isMobile ? 280 : isTablet ? 500 : 800,
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                flexDirection={isMobile ? "column" : "row"}
              >
                <ChipWithIconComp
                  icon={<i className="fa-solid fa-calendar-days"></i>}
                  label={experience.company}
                  chipProps={{
                    sx: {
                      backgroundColor: COLORS.WHITE,
                      width: isMobile ? 200 : undefined,
                    },
                  }}
                />
                <ChipWithIconComp
                  icon={<i className="fa-solid fa-graduation-cap"></i>}
                  label={experience.period}
                  stackProps={{ mt: isMobile ? 2 : undefined }}
                  chipProps={{
                    sx: {
                      backgroundColor: COLORS.WHITE,
                      width: isMobile ? 220 : undefined,
                    },
                  }}
                />
              </Box>
              <Box
                display={"flex"}
                mt={isMobile ? 0 : 2}
                justifyContent={isMobile ? "center" : undefined}
                alignItems={"center"}
              >
                <ChipWithIconComp
                  label={experience.role}
                  stackProps={{ mt: isMobile ? 2 : undefined }}
                  chipProps={{
                    sx: {
                      backgroundColor: COLORS.WHITE,
                      width: isMobile ? 220 : undefined,
                    },
                  }}
                />
              </Box>
              {experience.projects?.map((project, projectIndex) => (
                <Box key={projectIndex} mt={3}>
                  <MotionTypography
                    initial={{ opacity: 0, y: -500 }}
                    animate={controls}
                    variant="h6"
                  >
                    {project.name}
                  </MotionTypography>
                  {renderDetails(project.details)}
                  <Box display={"flex"} mt={2} alignItems={"center"}>
                    <KeyboardDoubleArrowRightIcon />
                    <Typography ml={2}>
                      Technologies utilized: {project.technologies}
                    </Typography>
                  </Box>
                </Box>
              ))}
              {!experience.projects && renderDetails(experience.details || [])}
              {experience.details && (
                <Box display={"flex"} mt={2} alignItems={"center"}>
                  <KeyboardDoubleArrowRightIcon />
                  <Typography ml={2}>
                    Technologies utilized: {experience.technologies}
                  </Typography>
                </Box>
              )}
            </MotionBox>
          );
        })}
      </Box>
    </WrapperComp>
  );
};

export default ExperienceSection;
