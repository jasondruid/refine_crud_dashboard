import React from "react";
import { Box, Stack, Typography, useTheme } from "@pankod/refine-mui";
import { propertyReferralsInfo } from "../../constants";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
  <Box width="100%">
    <Stack
      direction="row"
      sx={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#11142" }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#11142" }}>
        {percentage}%
      </Typography>
    </Stack>
    <Box
      mt={2}
      position="relative"
      width="100%"
      height="8px"
      borderRadius={1}
      bgcolor="#e4e8ef"
    >
      <Box
        sx={{
          width: `${percentage}%`,
          position: "absolute",
          height: "100%",
          borderRadius: 1,
          backgroundColor: color,
        }}
      />
    </Box>
  </Box>
);

const PropertyReferrals = () => {
  const actualTheme = useTheme().palette.mode;
  return (
    <Box
      sx={{
        flexDirection: "column",
        borderRadius: "15px",
        p: 4,
      }}
      bgcolor= {actualTheme === "dark" ? "#7c7c7d": "#fcfcfc"}
      id="chart"
      display="flex"
      minWidth={490}
    >
      {" "}
      <Typography fontSize={18} fontWeight={600}>
        Property Referrals
      </Typography>
      <Stack sx={{ my: "20px" }} direction="column" gap={4}>
        {propertyReferralsInfo.map((bar) => (
          <ProgressBar key={bar.title} {...bar} />
        ))}
      </Stack>
    </Box>
  );
};

export default PropertyReferrals;
