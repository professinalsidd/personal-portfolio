import { Box, Grid, Typography } from "@mui/material";
import WrapperComp from "../../../components/common/Wrapper/Wrapper";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import { COLORS, CustomSize } from "../../../themes";
import { certificateData } from "../../../constant/constant";

const CertificatesSection = () => {
  const { isMobile, isTablet } = CustomSize();

  return (
    <WrapperComp title="Certificate">
      <Grid mt={5} container>
        {certificateData.map((certificate, index) => {
          const bgClr =
            index % 2 !== 0 ? COLORS.LIGHT_BLUE_RGBA : COLORS.LIGHT_ORANGE_RGBA;
          return (
            <Grid
              key={index}
              xs={12}
              md={6}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                sx={{
                  ml: isMobile ? 1.2 : undefined,
                  width: isMobile ? 280 : isTablet ? 450 : 500,
                  background: bgClr,
                  borderRadius: 3,
                  p: 2,
                  mt: isMobile ? 2 : 5,
                  cursor: "pointer",
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <ChipWithIconComp
                    label={certificate.platform}
                    chipProps={{ sx: { backgroundColor: COLORS.WHITE } }}
                  />
                </Box>
                <Box>
                  <Typography mt={2}>{certificate.course}</Typography>
                </Box>
                <ChipWithIconComp
                  label="View"
                  icon={<i className="fa-solid fa-eye"></i>}
                  href={certificate.viewLink}
                  target="_blank"
                  stackProps={{
                    mt: isMobile ? 2 : 3,
                  }}
                  chipProps={{ sx: { p: 2, backgroundColor: COLORS.WHITE } }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </WrapperComp>
  );
};

export default CertificatesSection;
