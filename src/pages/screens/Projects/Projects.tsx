import { Box, Chip, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { COLORS, CustomSize } from "../../../themes";
import WrapperComp from "../../../components/common/Wrapper/Wrapper";
import ChipWithIconComp from "../../../components/common/chips/ChipsWithIcon";
import { projects } from "../../../constant/constant";

const ProjectsSection = () => {
  const { isMobile, isTablet } = CustomSize();
  const [visibleProjects, setVisibleProjects] = useState<any[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const shuffledProjects: any[] = [...projects].sort(
      () => Math.random() - 0.5
    );
    setVisibleProjects(shuffledProjects.slice(0, 3));
  }, []);

  const handleSeeMore = () => {
    setShowMore(true);
    setVisibleProjects(projects);
  };

  const handleShowLess = () => {
    setShowMore(false);
    setVisibleProjects(projects.slice(0, 3));
  };

  return (
    <WrapperComp title="Projects I've Worked on">
      {visibleProjects.map((project: any, index: number) => (
        <Box
          key={index}
          sx={{ backgroundColor: COLORS.WHITE }}
          display={"flex"}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent={"space-between"}
          p={2}
          mt={5}
        >
          <Box
            display={"flex"}
            flexDirection={isMobile ? "column" : isTablet ? "column" : "row"}
          >
            <Box
              sx={{
                // backgroundColor: COLORS.LIGHT_BROWN,
                width: isMobile ? "100%" : isTablet ? "100%" : 500,
                objectFit: "contain",
                borderRadius: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: isMobile
                  ? "column"
                  : isTablet
                  ? "column"
                  : "row",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: isMobile ? 250 : 500,
                  objectFit: "contain",
                  borderRadius: 6,
                }}
              />
            </Box>
            <Box ml={isMobile ? 0 : 2} mt={2}>
              <Typography variant="h4">{project.title}</Typography>
              <Typography variant="h6" mt={2}>
                {project.description}
              </Typography>
              <Box mt={2} display={"flex"} sx={{ flexWrap: "wrap" }}>
                {project.technologies.map((tech: any, idx: number) => (
                  <ChipWithIconComp
                    key={idx}
                    stackProps={{ mr: isMobile ? 1 : 2, p: 0.5 }}
                    chipProps={{ sx: { backgroundColor: COLORS.PRIMARY } }}
                    label={tech}
                  />
                ))}
              </Box>
              <Box mt={isMobile ? 2 : isTablet ? 2 : 2}>
                <Chip
                  color="default"
                  icon={<i className="fa-solid fa-eye"></i>}
                  label="View"
                  onClick={() => window.open(project.link, "_blank")}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
      <Box display="flex" justifyContent="center" mt={4}>
        {showMore ? (
          <Button
            variant="contained"
            sx={{
              border: `1px solid ${COLORS.PRIMARY}`,
              color: COLORS.WHITE,
              background: "none",
              width: 150,
              "&:hover": {
                background: COLORS.PRIMARY,
                border: "none",
                color: COLORS.BLACK,
              },
            }}
            color="primary"
            onClick={handleShowLess}
          >
            Show Less
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              border: `1px solid ${COLORS.PRIMARY}`,
              color: COLORS.WHITE,
              background: "none",
              width: 150,
              "&:hover": {
                background: COLORS.PRIMARY,
                border: "none",
                color: COLORS.BLACK,
              },
            }}
            color="primary"
            onClick={handleSeeMore}
          >
            See More
          </Button>
        )}
      </Box>
    </WrapperComp>
  );
};

export default ProjectsSection;
