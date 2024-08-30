import { Box, Grid, Typography } from "@mui/material";
import { COLORS, CustomSize } from "../../../themes";
import WrapperComp from "../../../components/common/Wrapper/Wrapper";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import TextComp from "../../../components/common/text/Text";
import { educationData } from "../../../constant/constant";
import { styled } from "@mui/system";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MotionBox = styled(motion(Box))``;

const EducationSection = () => {
  const { isMobile } = CustomSize();
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
    <WrapperComp title="Education">
      <Grid mt={5} container>
        {educationData?.map((item, index) => {
          const iconCr = index % 2 === 0 ? COLORS.BLACK : COLORS.WHITE;
          const iconBg = index % 2 === 0 ? COLORS.WHITE : COLORS.PRIMARY;
          const cardBg =
            index % 2 === 0
              ? "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);"
              : "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);";
          return (
            <Grid
              key={index}
              xs={12}
              md={6}
              p={isMobile ? 1 : 2}
              ml={isMobile ? 1.2 : undefined}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={isMobile ? "column" : "row"}
            >
              <MotionBox
                initial={{ opacity: 0, y: 200 }}
                animate={controls}
                sx={{
                  width: isMobile ? 280 : 450,
                  borderRadius: 3,
                  p: isMobile ? 1 : 2,
                  background: cardBg,
                  backdropFilter: "blur(50px)",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  color: COLORS.BLACK,
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <ChipWithIconComp
                    icon={<i className="fa-solid fa-calendar-days"></i>}
                    label={item.duration}
                    chipProps={{
                      sx: {
                        backgroundColor: COLORS.WHITE,
                      },
                    }}
                  />
                  <ChipWithIconComp
                    icon={<i className="fa-solid fa-graduation-cap"></i>}
                    label={item.educationType}
                    chipProps={{
                      sx: {
                        backgroundColor: COLORS.WHITE,
                      },
                    }}
                  />
                </Box>
                <Box display={"flex"} mt={2} alignItems={"center"}>
                  <ChipWithIconComp
                    label={item.degree}
                    stackProps={{ mr: 2 }}
                    chipProps={{
                      sx: {
                        backgroundColor: COLORS.WHITE,
                      },
                    }}
                  />
                  {item.course && (
                    <ChipWithIconComp
                      label={item?.course}
                      chipProps={{
                        sx: {
                          backgroundColor: COLORS.WHITE,
                        },
                      }}
                    />
                  )}
                </Box>
                <Typography
                  variant={isMobile ? "body1" : "h6"}
                  mt={2}
                  sx={{ color: COLORS.BLACK }}
                >
                  {item.title}
                </Typography>
                <Box display={"flex"} mt={2} alignItems={"center"}>
                  <Box
                    sx={{
                      backgroundColor: iconBg,
                      width: 30,
                      height: 30,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 99,
                    }}
                  >
                    <i
                      style={{ color: iconCr }}
                      className="fa-solid fa-user-graduate"
                    ></i>
                  </Box>
                  <Typography
                    variant="subtitle1"
                    ml={2}
                    sx={{ color: COLORS.BLACK }}
                  >
                    {item.university}
                  </Typography>
                </Box>
                <Box display={"flex"} mt={2} alignItems={"center"}>
                  <Box
                    sx={{
                      backgroundColor: iconBg,
                      width: 30,
                      height: 30,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 99,
                    }}
                  >
                    <i
                      style={{ color: iconCr }}
                      className="fa-solid fa-location-dot"
                    ></i>
                  </Box>
                  <TextComp
                    variant="subtitle1"
                    ml={2}
                    sx={{ color: COLORS.BLACK }}
                  >
                    {item.location}
                  </TextComp>
                </Box>
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>
    </WrapperComp>
  );
};

export default EducationSection;
