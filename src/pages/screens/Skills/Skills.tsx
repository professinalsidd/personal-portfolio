import { Box, Typography } from "@mui/material";
import { COLORS, CustomSize } from "../../../themes";
import WrapperComp from "../../../components/common/Wrapper/Wrapper";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  useEffect,
} from "react";
import { Key } from "react";
import { skillsData } from "../../../constant/constant";
import { motion, useAnimation } from "framer-motion";
import { styled } from "@mui/system";

const MotionBox = styled(motion(Box))``;

const SkillsSection = () => {
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

  const renderSkills = (
    title:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined,
    data: any[]
  ) => (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
      mt={5}
    >
      <Typography
        variant={isMobile ? "h6" : "h4"}
        textAlign={"center"}
        color={COLORS.PRIMARY}
      >
        {title}
      </Typography>
      <MotionBox
        initial={{ opacity: 0, y: -500 }}
        animate={controls}
        mt={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: isMobile ? undefined : isTablet ? undefined : undefined,
        }}
      >
        {data.map(
          (
            item: { name: string; iconClass: string | undefined; color: any },
            index: Key | null | undefined
          ) => (
            <ChipWithIconComp
              key={index}
              label={item.name}
              icon={
                <i className={item.iconClass} style={{ color: item.color }} />
              }
              stackProps={{ p: 2 }}
              chipProps={{
                sx: {
                  fontSize: isMobile ? 20 : 30,
                  background: COLORS.WHITE,
                  p: 3,
                },
              }}
            />
          )
        )}
      </MotionBox>
    </Box>
  );

  return (
    <WrapperComp title="Skills">
      {renderSkills("Design Tools I Use", skillsData.designTools)}
      {renderSkills("Technologies I Use", skillsData.technologies)}
      {renderSkills(
        "Development & Productivity Tools I Use",
        skillsData.productivityTools
      )}
    </WrapperComp>
  );
};

export default SkillsSection;
