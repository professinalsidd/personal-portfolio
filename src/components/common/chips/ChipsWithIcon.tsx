import { Stack, Chip, ChipProps } from "@mui/material";
import { COLORS } from "../../../themes";
import React from "react";

type ChipWithIconProps = {
  icon?: React.ReactElement;
  label: string;
  stackProps?: React.ComponentProps<typeof Stack>;
  chipProps?: ChipProps;
  href?: string;
  target?: string;
};

const ChipWithIconComp: React.FC<ChipWithIconProps> = ({
  icon,
  label,
  stackProps,
  chipProps,
  href,
  target = "_blank", // Default target to "_blank" for new tab
}) => {
  return (
    <Stack direction="row" spacing={1} {...stackProps}>
      <Chip
        sx={{
          backgroundColor: COLORS.WHITE,
          ...chipProps?.sx,
        }}
        icon={icon}
        label={label}
        component={href ? "a" : "div"}
        href={href}
        target={href ? target : undefined}
        {...chipProps}
      />
    </Stack>
  );
};

export default ChipWithIconComp;
