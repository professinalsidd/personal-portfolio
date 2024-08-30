import { Box } from "@mui/material";
import { COLORS, CustomSize } from "../../../themes";
import PersonImg from "../../../assets/images/person-2.png";
import WrapperComp from "../../../components/common/Wrapper/Wrapper";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import { socialLinks } from "../../../constant/constant";
import { motion } from "framer-motion";

const ConnectWithMeSection = () => {
  const { isMobile, isTablet } = CustomSize();

  return (
    <WrapperComp title="Connect With me">
      <Box
        mt={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: isMobile ? undefined : isTablet ? undefined : undefined,
        }}
      >
        {socialLinks?.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 2 },
            }}
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <ChipWithIconComp
              label={link.label}
              icon={
                <i
                  className={link.icon}
                  style={{ color: link.color, fontSize: isMobile ? 20 : 30 }}
                ></i>
              }
              stackProps={{ p: 2 }}
              chipProps={{
                sx: {
                  fontSize: isMobile ? 20 : 30,
                  background: COLORS.WHITE,
                  p: 3,
                  cursor: "pointer",
                },
              }}
            />
          </motion.a>
        ))}
      </Box>
      <Box display={"flex"} mt={5} justifyContent={"center"}>
        <img
          src={PersonImg}
          style={{ width: isMobile ? 250 : 400 }}
          alt="person"
        />
      </Box>
    </WrapperComp>
  );
};

export default ConnectWithMeSection;
