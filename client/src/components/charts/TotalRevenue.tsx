import React from "react";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import { Box, Stack, Typography,useTheme } from "@pankod/refine-mui";
import ReactApexChart from "react-apexcharts";

const TotalRevenue = () => {
  const actualTheme = useTheme().palette.mode;
  return (
    <Box
      sx={{
        flexDirection: "column",
        borderRadius: "15px",
        p: 4,
        flex: 1,

      }}
      id="chart"
      display="flex"
      bgcolor= {actualTheme === "dark" ? "#7c7c7d": "#fcfcfc"}
    >
      <Typography fontSize={18} fontWeight={600}>
        Total Revenue
      </Typography>
      <Stack sx={{ my: "20px", flexWrap: "wrap", gap: 4 }} direction="row">
        <Typography
          sx={{ fontSize: "28px", fontWeight: 700,  }}
        >
          $236,535
        </Typography>
        <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: actualTheme ==="dark" ? "" :"#475be8" }} />
          <Stack>
            <Typography sx={{ fontSize: 15, color: actualTheme ==="dark" ? "" :"#475be8" }}>
              0.8%
            </Typography>
            <Typography sx={{ fontSize: 12, color: actualTheme ==="dark" ? "#cccccc" :"#475be8"  }}>
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
       style={{color: actualTheme ==="dark" ? "black" :""}}
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;
