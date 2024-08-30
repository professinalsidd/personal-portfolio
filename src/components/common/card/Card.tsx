import { Box, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChipWithIconComp from "../chips/ChipsWithIcon";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { COLORS } from "../../../themes";

const CardComp = () => {
  return (
    <Box
      className="card-1"
      sx={{
        m: 2,
        width: 400,
        borderRadius: 3,
        p: 2,
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <ChipWithIconComp icon={<CalendarMonthIcon />} label="2017-2020" />
        <ChipWithIconComp icon={<AutoStoriesIcon />} label="Graduation" />
      </Box>
      <Box display={"flex"} mt={2} alignItems={"center"}>
        <ChipWithIconComp label="Bachelor's Degree" chipProps={{}} />
        <ChipWithIconComp label="BCA" />
      </Box>
      <Box>
        <Typography mt={2}>Bachelor of Computer Applications</Typography>
      </Box>
      <Box display={"flex"} mt={2} alignItems={"center"}>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 99,
          }}
        >
          <AutoStoriesIcon />
        </Box>
        <Typography ml={2}>CCS Unviersity</Typography>
      </Box>
      <Box display={"flex"} mt={2} alignItems={"center"}>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 99,
          }}
        >
          <LocationOnIcon />
        </Box>
        <Typography ml={2}>India Meerut</Typography>
      </Box>
    </Box>
  );
};

export default CardComp;
