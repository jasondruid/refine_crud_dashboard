import React from "react";
import { useGetIdentity, useOne } from "@pankod/refine-core";
import { Profile } from "components";
import { Typography } from "@pankod/refine-mui";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Profile
      type="My"
      avatar={myProfile.avatar}
      name={myProfile.name}
      email={myProfile.email}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
