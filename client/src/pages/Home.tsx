import React from "react";
import { useList } from "@pankod/refine-core";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";
import { Box, Stack, Typography, useTheme } from "@pankod/refine-mui";

const Home = () => {
  const actualTheme = useTheme().palette.mode;
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Box>
      <Typography
        fontSize={25}
        fontWeight={700}
        color={actualTheme === "dark" ? "#f7f7f7" : "#11142D"}
      >
        Dashboard
      </Typography>
      <Box sx={{ mt: "20px", display: "flex", flexWrap: "wrap" }} gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={500}
          series={[60, 40]}
          colors={["#475ae8", "#e4b8ef"]}
        />
        <PieChart
          title="Total Costumers"
          value={5695}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties for Cities"
          value={555}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack
        sx={{ mt: "25px", width: "100%" }}
        
        gap={4}
        direction={{ xs: "column", lg: "row" }}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor= {actualTheme === "dark" ? "#7c7c7d": "#fcfcfc"}
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} >
          Latest Properties
        </Typography>

        <Box mt={2.5} sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
