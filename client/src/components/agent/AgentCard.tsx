import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import React from "react";
import {
  Email,
  EmailOutlined,
  Info,
  LocationCity,
  Phone,
  Place,
} from "@mui/icons-material";
import { useGetIdentity } from "@pankod/refine-core";
import { Box, Stack, Typography, useTheme } from "@pankod/refine-mui";
import { Link } from "@pankod/refine-react-router-v6";

const InfoBar = ({ icon, name }: InfoBarProps) => {
  const actualTheme = useTheme().palette.mode
  return (
  <Stack minWidth={{ xs: "100%", sm: 300 }} gap={1.5} direction="row" flex={1} color={actualTheme === "dark" ? "white" : "#808191"}>
    {icon}
    <Typography fontSize={14}>
      {name}
    </Typography>
  </Stack>
)};

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const actualTheme = useTheme().palette.mode;
  const { data: currentUser } = useGetIdentity();
  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";
    return `/agent/show/${id}`;
  };

  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        padding: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px fgba(176,176,176,0.1)",
        },
      }}
      bgcolor={actualTheme === "dark" ? "#6b6b6b" : ""}
    >
      <img
        src={avatar}
        alt="user"
        width={90}
        height={90}
        style={{ borderRadius: 8, objectFit: "cover" }}
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack
          flexWrap="wrap"
          alignItems="center"
          gap={2}
          direction="row"
          color={actualTheme === "dark" ? "white" : "#11142d"}
        >
          <Typography fontSize={22} fontWeight={600}>
            {name}
          </Typography>
          <Typography fontSize={14}>Real-Estate Agent</Typography>
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <InfoBar
            icon={<EmailOutlined  />}
            name={email}
          />
          <InfoBar icon={<Place  />} name="London" />
          <InfoBar
            icon={<Phone />}
            name="+502-3231-4141"
          />
          <InfoBar
            icon={<LocationCity />}
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
