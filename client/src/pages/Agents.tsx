import React from "react";
import { useList } from "@pankod/refine-core";
import { Box, Typography, useTheme } from "@pankod/refine-mui";
import { AgentCard } from "components";

const Agents = () => {
  const actualTheme = useTheme().palette.mode;
  const { data, isLoading, isError } = useList({
    resource: "users",
  });

  const allAgents = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;
  console.log(allAgents);

  return (
    <Box>
      <Typography
        sx={{ fontSize: 25, fontWeight: 700 }}
        color={actualTheme === "dark" ? "#f7f7f7" : "#11142D"}
      >
        Agents List
      </Typography>
      <Box
        sx={{
          mt: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#fcfcfc",
        }}
      >
        {allAgents.map((agent) => (
          <AgentCard
            key={agent._id}
            id={agent._id}
            name={agent.name}
            email={agent.email}
            avatar={agent.avatar}
            noOfProperties={agent.allProperties.length}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Agents;
